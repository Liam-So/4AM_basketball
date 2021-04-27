import React from 'react'
import { Card, CardMedia, CardContent, IconButton } from '@material-ui/core'
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
                _id: product._id,
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
                {console.log(product.img)}
            </CardMedia>
            <CardContent>
                <div className={classes.cardContent}>
                    <p className="text-xl text-gray-900 font-bold">{product.name}</p>
                    <p className="font-bold text-xl">${product.price}</p>
                </div>
                <div className="flex justify-between">
                    <p className="pt-3 text-m text-gray-500">{product.description}</p>
                    <IconButton onClick={addToBasket} aria-label="Add to Cart"><AddShoppingCart /></IconButton>
                </div>
            </CardContent>
        </Card>
    </div>
    )
}

export default RegisterItem
