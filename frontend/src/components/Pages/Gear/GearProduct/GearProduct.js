import React, { useState } from 'react'
import useStyles from './styles'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, ButtonGroup, Button } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'
import { useStateValue } from "../../../StateProvider"

function GearProduct({ product }) {

    const [state, setState] = useState("") ; 

    const [{ basket }, dispatch] = useStateValue() ; 

        const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: product.id + state,
                title: product.name,
                image: product.img,
                price: product.price,
                description: product.description,
                quantity: product.quantity,
                addedSize: state,
            }
        })
    } ; 

    const handleClick = (e) => {
        if (e.currentTarget.value === "xs") {
            setState("XS")
        } 
        if (e.currentTarget.value === "s") {
            setState("S")
        }
        if (e.currentTarget.value === "m") {
            setState("M")
        }
        if (e.currentTarget.value === "l") {
            setState("L")
        }
        if (e.currentTarget.value === "xl") {
            setState("XL")
        }
    }



    const classes = useStyles() ; 

    return (

        <Card className={classes.root}>
            <CardMedia title={product.name}>
                <img src={product.img} alt={product.name} />
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
            </CardContent>
            
            <CardActions className={classes.cardActions}>
            <ButtonGroup aria-label="outlined primary button group">
                <Button onClick={handleClick} value="xs">XS</Button>
                <Button onClick={handleClick} value="s">S</Button>
                <Button onClick={handleClick} value="m">M</Button>
                <Button onClick={handleClick} value="l">L</Button>
                <Button onClick={handleClick} value="xl">XL</Button>
            </ButtonGroup>
                <IconButton onClick={addToBasket} aria-label="Add to Cart"><AddShoppingCart /></IconButton>
            </CardActions>
        </Card>
    )
}

export default GearProduct
