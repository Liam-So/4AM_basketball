import express from "express";
import mongoose from "mongoose";
import Cors from "cors";
import nodemailer from "nodemailer";
import Products from "./dbProducts.js";
import Camps from "./dbCamps.js";
import Gear from "./dbGear.js";
import config from "./config.js";

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

// Donate Products
app.post("/products", (req, res) => {
  const dbProduct = req.body;

  Products.create(dbProduct, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/products", (req, res) => {
  Products.find((err, data) => {
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
    // using text, we can preserve whitespace and linebreaks, however this code is messier as you can see (its just longer)
    // text:
    //   "Name: " +
    //   fname +
    //   " " +
    //   lname +
    //   "\n" +
    //   "\nEmail: " +
    //   email +
    //   "\n" +
    //   "\nPhone: " +
    //   phone +
    //   "\n" +
    //   "\nCity: " +
    //   city +
    //   "\n" +
    //   "\nSchool: " +
    //   school +
    //   "\n" +
    //   "\nTeam: " +
    //   team +
    //   "\n" +
    //   "\nQuestion Response: \n\n" +
    //   application,
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

// Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`));
