import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'
import useStyles from './styles'
import { useStateValue } from '../../../StateProvider'

function DonateProduct({ product }) {

    const classes = useStyles() ; 

    const [{}, dispatch] = useStateValue() ; 

        const addToBasket = () => {
        // add item to basket...
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: product.id,
                title: product.name,
                image: product.image,
                price: product.price,
                description: product.description,
            }
        })
    } ; 

    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.image} title={product.name}/>
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant="h5" >
                        {product.price}
                    </Typography>
                </div>
                <Typography variant="body2" color="textSecondary">{product.description}</Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton onClick={addToBasket} aria-label="Add to Cart"><AddShoppingCart /></IconButton>
            </CardActions>
        </Card>
    )
}

export default DonateProduct