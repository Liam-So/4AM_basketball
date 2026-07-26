import express from 'express';
import mongoose from 'mongoose';
import Cors from 'cors';
import nodemailer from 'nodemailer';
import Camps from './dbCamps.js';
import Gear from './dbGear.js';
import Transactions from './dbTransactions.js';
import RegistrationForm from './dbRegistrationForm.js';
import { appendRegistrationRow } from './googleSheets.js';
import env from 'dotenv';

// App config
const app = express();
env.config();
const port = process.env.PORT || 8001;
const connection_url = process.env.MONGODB_URI;

// nodemailer
/*const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: process.env.user,
    clientId: process.env.client_id,
    clientSecret: process.env.client_secret,
    refreshToken: process.env.refresh_token,
    accessToken: process.env.access_token,
  },
});*/

import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);

// Middlewares
app.use(express.json());
app.use(Cors());

// DB config
mongoose
  .connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then((res) => {
    console.log('DB Connected!');
  })
  .catch((err) => {
    console.log(Error, err.message);
  });

mongoose.set('useFindAndModify', false);

// API Endpoints
app.get('/', (req, res) => res.status(200).send('Yooo'));

// Registration
app.post('/registration', (req, res) => {
  const dbProduct = req.body;

  Camps.create(dbProduct, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get('/registration', (req, res) => {
  Camps.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.get('/registration/:id', async (req, res) => {
  try {
    const item = await Camps.findById(req.params.id);
    res.json(item);
  } catch (err) {
    console.error(err.message);
    res.send(400).send('Server Error');
  }
});

app.put('/registration/:id', async (req, res) => {
  try {
    await Camps.findByIdAndUpdate(req.params.id, {
      sku: req.body.sku,
    });
    res.send('Item Updated!');
  } catch (err) {
    console.error(err.message);
    res.send(400).send('Server Error');
  }
});

// Registration Form (athlete info collected during checkout, step 1)
// Mongo is the source of truth here. The Google Sheets write is a mirror
// for the volunteers' convenience -- if it fails, the submission is still
// saved and the request still succeeds, so a Sheets/API hiccup can never
// cost someone their registration data.
app.post('/registration-form', async (req, res) => {
  const {
    campId,
    campType,
    campName,
    transactionId,
    athleteName,
    grade,
    school,
    team,
    email,
    emergencyContactName,
    emergencyContactPhone,
    tshirtSize,
    comments,
  } = req.body;

  try {
    const saved = await RegistrationForm.create({
      campId,
      campType,
      campName,
      transactionId,
      athleteName,
      grade,
      school,
      team,
      email,
      emergencyContactName,
      emergencyContactPhone,
      tshirtSize,
      comments,
    });

    try {
      await appendRegistrationRow(campType, [
        new Date().toISOString(),
        athleteName,
        grade,
        school,
        team,
        email,
        emergencyContactName,
        emergencyContactPhone,
        tshirtSize,
        comments,
        transactionId,
      ]);
    } catch (sheetsErr) {
      console.error(
        'Google Sheets append failed (submission is still saved in MongoDB):',
        sheetsErr.message
      );
    }

    res.status(201).send(saved);
  } catch (err) {
    console.error(err.message);
    res.status(500).send({ error: 'Failed to save registration form.' });
  }
});

app.get('/registration-form', async (req, res) => {
  try {
    const data = await RegistrationForm.find();
    res.status(200).send(data);
  } catch (err) {
    console.error(err.message);
    res.status(500).send({ error: 'Failed to fetch registration forms.' });
  }
});

// Gear Products
app.post('/gear', (req, res) => {
  const gearProduct = req.body;

  Gear.create(gearProduct, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get('/gear', (req, res) => {
  Gear.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.get('/gear/:id', async (req, res) => {
  try {
    const item = await Gear.findById(req.params.id);
    res.json(item);
  } catch (err) {
    console.error(err.message);
    res.send(400).send('Server Error');
  }
});

app.put('/gear/:id', async (req, res) => {
  try {
    await Gear.findByIdAndUpdate(req.params.id, {
      sku: req.body.sku,
    });
    res.send('Item Updated!');
  } catch (err) {
    console.error(err.message);
    res.send(400).send('Server Error');
  }
});

// Scholarship Application
app.post('/scholarship', (req, res) => {
  const fname = req.body.first_name;
  const lname = req.body.last_name;
  const email = req.body.email;
  const phone = req.body.phone;
  const city = req.body.city;
  const school = req.body.school;
  const team = req.body.team;
  const character = req.body.character.replace(/\n/g, '<br />');
  const reference_name = req.body.reference_name;
  const reference_relationship = req.body.reference_relationship;
  const reference_phone = req.body.reference_phone;
  const mail = {
    from: fname,
    to: process.env.user,
    subject: 'Scholarship Application',
    // using html, the code is short and simple and pretty clean to look at and linebreaks are preserverd, BUT whitespaces are not
    html: `<p>Name: ${fname} ${lname}</p>
          <p>Email: ${email}</p>
          <p>Phone: ${phone}</p>
          <p>City: ${city}</p>
          <p>School: ${school}</p>
          <p>Team: ${team}</p>
          <p>Reference Name: ${reference_name}</p>
          <p>Reference Relationship: ${reference_relationship}</p>
          <p>Reference Phone: ${reference_phone}</p>
          <p>Question Response: <br /><br />${character}</p>`,
  };

  /*contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.log(error);
      res.json({ status: 'ERROR' });
    } else {
      res.json({ status: 'Message Sent' });
    }
  });*/

  resend.emails.send({
    from: 'onboarding@resend.dev',
    to: process.env.user,
    subject: 'Scholarship Application',
    html: `<p>Name: ${fname} ${lname}</p>
          <p>Email: ${email}</p>
          <p>Phone: ${phone}</p>
          <p>City: ${city}</p>
          <p>School: ${school}</p>
          <p>Team: ${team}</p>
          <p>Reference Name: ${reference_name}</p>
          <p>Reference Relationship: ${reference_relationship}</p>
          <p>Reference Phone: ${reference_phone}</p>
          <p>Question Response: <br /><br />${character}</p>`,
  }).then(() => {
    res.json({ status: 'Message Sent' });
  }).catch((error) => {
    console.log(error);
    res.json({ status: 'ERROR' });
  });

});

// Transactions
app.post('/transactions', (req, res) => {
  const transactionProduct = req.body;

  Transactions.create(transactionProduct, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get('/transactions', (req, res) => {
  Transactions.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

// Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`));
