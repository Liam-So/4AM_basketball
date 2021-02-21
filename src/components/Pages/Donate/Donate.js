import React from 'react'
import { Grid } from '@material-ui/core'
import Logo from '../../../images/logo.png'
import DonateProduct from './DonateProduct/DonateProduct'
import useStyles from './styles'
import HeroSection from '../../HeroSection/HeroSection'
import { homeObjOne } from './Data'


function Donate() {

    const products = [
        { id: 1, name: 'Donate $10', description: 'Goes towards scholarship fund', price: 10, image: Logo},
        { id: 2, name: 'Donate $20', description: 'Goes towards schorship fund', price: 20, image: Logo },
        { id: 3, name: 'Donate $50', description: 'Goes towards schorship fund', price: 50, image: Logo },
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