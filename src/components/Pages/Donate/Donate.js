import React from 'react'
import { Grid } from '@material-ui/core'
import Logo from '../../../images/logo.png'
import DonateProduct from './DonateProduct/DonateProduct'
import useStyles from './styles'
import HeroSection from '../../HeroSection/HeroSection'
import { homeObjOne } from './Data'


function Donate() {

    const products = [
        { id: 1, name: 'Donation', description: 'All proceeds go toward scholarship fund', price: 10, image: Logo, quantity: 1},
        { id: 2, name: 'Donation', description: 'All proceeds go toward scholarship fund', price: 20, image: Logo, quantity: 1},
        { id: 3, name: 'Donation', description: 'All proceeds go toward scholarship fund', price: 50, image: Logo, quantity: 1},
    ]

    const classes = useStyles();



    return (
        <div>
            <HeroSection {...homeObjOne} />
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Grid container justify="center" spacing={4}>
                    {products.map((product) => (
                        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                            <DonateProduct product={product}/>
                        </Grid>
                    ))}
                </Grid>
            </main>
        </div>

        
    )
}

export default Donate