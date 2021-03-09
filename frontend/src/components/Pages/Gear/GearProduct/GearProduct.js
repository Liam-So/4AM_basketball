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
                id: product.id,
                title: product.name,
                image: product.img,
                price: product.price,
                description: product.description,
                quantity: product.quantity,
                size: state,
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

    console.log(state)


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


        // <div className="py-6 w-screen">
        //     <div className="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
        //         <div className="w-1/3 bg-cover" style={{backgroundImage: "url('https://images.unsplash.com/photo-1494726161322-5360d4d0eeae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80')"}}>
        //         </div> 
        //         <div className="w-2/3 p-4">
        //         <h1 className="text-gray-900 font-bold text-2xl">{product.name}</h1>
        //         <p className="mt-2 text-gray-600 text-sm">{product.description}</p>
        //         <div className="flex item-center mt-2">
        //         <ButtonGroup color="primary" aria-label="outlined primary button group">
        //             <Button>XS</Button>
        //             <Button>S</Button>
        //             <Button>M</Button>
        //             <Button>L</Button>
        //             <Button>XL</Button>
        //         </ButtonGroup>
        //         </div>
        //         <div className="flex item-center justify-between mt-3">
        //             <h1 className="text-gray-700 font-bold text-xl">${product.price}</h1>
        //             <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">Add to Card</button>
        //         </div>
        //         </div>
        //     </div>
        // </div>
    )
}

export default GearProduct
