import React, { useState, useEffect } from 'react'
import Topbar from '../../Topbar/Topbar'
import useStyles from "./styles"
import GearProduct from './GearProduct/GearProduct';
import { Grid } from "@material-ui/core"
import axios from "../../../axios"

function Gear() {

    const classes = useStyles();

    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchData() {
          const req = await axios.get("/gear");
    
          setProducts(req.data);
        }
    
        fetchData();
      }, []);

    return (
        <>
            <div className="gear">
                <Topbar />
                <div className="subGear">
                    Gear
                </div>
            </div> 


            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Grid container justify="center" spacing={4}>
                    {products.map((product) => (
                        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                            <GearProduct product={product} />
                        </Grid>
                    ))}
                </Grid>
            </main>
    </>
    )
}

export default Gear
