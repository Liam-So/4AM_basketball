import React from 'react'
import { Grid } from '@material-ui/core'
import DonateProduct from './DonateProduct/DonateProduct'
import useStyles from './styles'
import HeroSection from '../../HeroSection/HeroSection'
import { homeObjOne } from './Data'


function Donate({ products, onAddToCart }) {

    const classes = useStyles();



    return (
        <div>
            <HeroSection {...homeObjOne} />
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Grid container justify="center" spacing={4}>
                    {products.map((product) => (
                        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                            <DonateProduct product={product} onAddToCart={onAddToCart} />
                        </Grid>
                    ))}
                </Grid>
            </main>
        </div>

        
    )
}

export default Donate
