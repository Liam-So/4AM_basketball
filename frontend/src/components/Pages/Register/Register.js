import React, { useState, useEffect } from "react";
import useStyles from "./styles";
import { Typography, Grid } from "@material-ui/core";
import RegisterItem from "./RegisterItem/RegisterItem";
import axios from "../../../axios";
import Topbar from "../../Topbar/Topbar";

function Register() {
  const classes = useStyles();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("/registration");

      setProducts(req.data);
    }

    fetchData();
  }, []);

  const EmptyCamp = () => (
    <>
      <Grid
        container
        className={classes.empty}
        justify="center"
        style={{ height: "70vh", fontFamily: "Lato" }}
      >
        <div>
          <Typography variant="h4" style={{ fontFamily: "Lato" }}>
            Sorry, registration for the 4AM Camp is not open at this time.{" "}
          </Typography>
        </div>
        <div>
          <br />
          <Typography variant="body1" style={{ fontFamily: "Lato" }}>
            Stay tuned to our social media accounts or Registration
            announcements. Thank you for your interest!
          </Typography>
        </div>
      </Grid>
    </>
  );

  const RegisterCamp = () => (
    <div className={classes.outer}>
      <div className={classes.information}>
        <Typography variant="h4" gutterBottom style={{ fontFamily: "Lato" }}>
          Register for the 2020 4AM Camp by clicking on one of the product icons
          below.
        </Typography>
        <Typography variant="h6" style={{ fontFamily: "Lato" }} gutterBottom>
          Before you register, make sure to read and understand the following,
          and watch the video below:
        </Typography>
        <div className={classes.subInfo}>
          <Typography variant="subtitle1" style={{ fontFamily: "Lato" }}>
            <li>
              The 2020 4AM Camp will run the week of August 17-20, 2020 at the
              Caledonia Jr High Outdoor Courts. The cost of the camp is $100.
              All proceeds from the camp go towards the Andrew Milner Memorial
              Scholarship.
            </li>
          </Typography>
          <Typography variant="subtitle1" style={{ fontFamily: "Lato" }}>
            <li>
              Click here to read how we will be delivering our basketball
              program while complying with the NS Provincal Health Guidelines in
              ergard to the COVID-19 pandemic. We are commiteed to holding the
              safety of our athletes and coaches as our top prioity. Athletes
              will be required to sign a awiver at the start of the camp and
              fill out COVID-19 screenings in advance of the camp and daily
              during the camp.
            </li>
          </Typography>
        </div>
      </div>
      <main className={classes.content}>
        <Grid container justify="center" spacing={4}>
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <RegisterItem product={product} />
            </Grid>
          ))}
        </Grid>
      </main>
    </div>
  );

  return (
    <div>
      <Topbar transparent={true}/>
      {products.length ? <RegisterCamp /> : <EmptyCamp />}
    </div>
  );
}

export default Register;
