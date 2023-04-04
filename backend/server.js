import express from 'express';
import mongoose from 'mongoose';
import Cors from 'cors';
import nodemailer from 'nodemailer';
import Camps from './dbCamps.js';
import Gear from './dbGear.js';
import Transactions from './dbTransactions.js';
import env from 'dotenv';
import google from 'google';

// App config
const app = express();
env.config();
const port = process.env.PORT || 8001;
const connection_url = process.env.MONGODB_URI;
const OAuth2 = google.auth.OAuth2;

const oauth2Client = new OAuth2(
  process.env.client_id,
  process.env.client_secret,
  'https://developers.google.com/oauthplayground'
);

oauth2Client.setCrendentials({
  refresh_token: process.env.refresh_token,
});

const accessToken = oauth2Client.getAccessToken();

// nodemailer
const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: process.env.user,
    clientId: process.env.client_id,
    clientSecret: process.env.client_secret,
    refreshToken: process.env.refresh_token,
    accessToken: accessToken,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Ready to Send');
  }
});

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
  const application = req.body.application.replace(/\n/g, '<br />');
  console.log(application);
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
          <p>Question Response: <br /><br />${application}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: 'ERROR' });
    } else {
      res.json({ status: 'Message Sent' });
    }
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
