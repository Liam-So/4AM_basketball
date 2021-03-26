import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'
import useStyles from './styles'
import { useStateValue } from '../../../StateProvider'

function RegisterItem({ product }) {

    const classes = useStyles() ; 

    const [{ basket }, dispatch] = useStateValue() ; 

        const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: product.id,
                title: product.name,
                type: product.type,
                image: product.img,
                price: product.price,
                description: product.description,
                quantity: product.quantity,
                sku: product.sku
            }
        })
    } ; 

    return (
        <div>
            <Card className={classes.root}>
            <CardMedia title={product.name}>
                <img className={classes.image} src={product.img} alt={product.name} />
            </CardMedia>
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant="h5" >
                        ${product.price}
                    </Typography>
                </div>
                <Typography variant="body1" color="textSecondary">{product.description}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <IconButton onClick={addToBasket} aria-label="Add to Cart"><AddShoppingCart /></IconButton>
            </CardActions>
        </Card>
        </div>
    )
}

export default RegisterItem
