import React, { useState } from 'react'
import Topbar from '../../Topbar/Topbar'
import image from '../../../images/1a.png'
import useStyles from "./styles"
import GearProduct from './GearProduct/GearProduct';
import { Grid } from "@material-ui/core"

function Gear() {

    const classes = useStyles();

    const [products, setProducts] = useState([
        {
            id: "9",
            name: "T-Shirt",
            price: 20,
            quantity: 1,
            img: image,
            description: "T-shirt for camp",
            size: ""
        }
    ]);

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
