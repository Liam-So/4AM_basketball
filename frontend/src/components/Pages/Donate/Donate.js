import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import DonateProduct from "./DonateProduct/DonateProduct";
import useStyles from "./styles";
import HeroSection from "../../HeroSection/HeroSection";
import { homeObjOne } from "./Data";
import axios from "../../../axios";
import Topbar from "../../Topbar/Topbar";

function Donate() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("/donations");

      setProducts(req.data);
    }

    fetchData();
  }, []);

  const classes = useStyles();

  return (
    <div>
      <Topbar transparent={true}/>
      <HeroSection {...homeObjOne} />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container justify="center" spacing={4}>
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <DonateProduct product={product} />
            </Grid>
          ))}
        </Grid>
      </main>
    </div>
  );
}

export default Donate;
