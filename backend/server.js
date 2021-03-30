import express from "express";
import mongoose from "mongoose";
import Cors from "cors";
import nodemailer from "nodemailer";
import Donations from "./dbDonate.js";
import Camps from "./dbCamps.js";
import Gear from "./dbGear.js";
import config from "./config.js";
import Transactions from "./dbTransactions.js";

// App config
const app = express();
const router = express.Router();
const port = process.env.PORT || 8001;
const connection_url = `mongodb+srv://admin:debutStance738@cluster0.t9hwl.mongodb.net/4am-basketball?retryWrites=true&w=majority`;

// nodemailer
const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: config.user,
    clientId: config.client_id,
    clientSecret: config.client_secret,
    refreshToken: config.refresh_token,
    accessToken: config.access_token,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
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
    console.log("DB Connected!");
  })
  .catch((err) => {
    console.log(Error, err.message);
  });

// API Endpoints
app.get("/", (req, res) => res.status(200).send("Yooo"));

// Donations
app.post("/donations", (req, res) => {
  const donateProduct = req.body;

  Donations.create(donateProduct, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/donations", (req, res) => {
  Donations.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});


// Registration
app.post("/registration", (req, res) => {
  const dbProduct = req.body;

  Camps.create(dbProduct, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/registration", (req, res) => {
  Camps.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.get("/registration/:id", async (req, res) => {
  try {
    const item = await Camps.findById(req.params.id) ; 
    res.json(item) ; 
  } catch (err) {
    console.error(err.message) ; 
    res.send(400).send('Server Error') ; 
  }
})

app.put("/registration/:id", async (req, res) => {
  try {
    await Camps.findByIdAndUpdate(req.params.id, {
      sku: req.body.sku
    });
    res.send("Item Updated!") ; 
  } catch(err) {
    console.error(err.message) ; 
    res.send(400).send("Server Error") ;
  }
})

// Gear Products
app.post("/gear", (req, res) => {
  const gearProduct = req.body;

  Gear.create(gearProduct, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/gear", (req, res) => {
  Gear.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.get("/gear/:id", async (req, res) => {
  try {
    const item = await Gear.findById(req.params.id) ; 
    res.json(item) ; 
  } catch (err) {
    console.error(err.message) ; 
    res.send(400).send('Server Error') ; 
  }
});

app.put("/gear/:id", async (req, res) => {
  try {
    await Gear.findByIdAndUpdate(req.params.id, {
      sku: req.body.sku
    });
    res.send("Item Updated!") ; 
  } catch(err) {
    console.error(err.message) ; 
    res.send(400).send("Server Error") ;
  }
})

// Scholarship Application
app.post("/scholarship", (req, res) => {
  const fname = req.body.first_name;
  const lname = req.body.last_name;
  const email = req.body.email;
  const phone = req.body.phone;
  const city = req.body.city;
  const school = req.body.school;
  const team = req.body.team;
  const application = req.body.application.replace(/\n/g, "<br />");
  console.log(application);
  const mail = {
    from: fname,
    to: config.user,
    subject: "Scholarship Application",
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
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent" });
    }
  });
});

// Transactions
app.post("/transactions", (req, res) => {
  const transactionProduct = req.body;

  Transactions.create(transactionProduct, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/transactions", (req, res) => {
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
