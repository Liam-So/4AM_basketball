import React from 'react'
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core'
import useStyles from './styles'
import { useStateValue } from '../../StateProvider'


function CartItem({ item }) {
    const classes = useStyles() ; 

    console.log(item) ; 

    const [{ basket }, dispatch] = useStateValue() ; 


    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: item.id,
        })
    };

    const addExtraItem = () => {
        dispatch({
            type: "ADD_EXTRA_ITEM",
            id: item.id,
        })
    }

    return (
        <Card className="cart-item">
            <CardMedia>
                <img src={item.image} alt={item.id} />
            </CardMedia> 
            <CardContent className={classes.cardContent} >
                <Typography style={{fontFamily: 'Lato'}} variant="h5">{item.title}</Typography>
                <Typography style={{fontFamily: 'Lato'}} variant="h5">${item.price}</Typography>
            </CardContent>
            <CardActions className={classes.cartActions}>
                <div className={classes.buttons} >
                    <Button type="button" size="small">-</Button>
                    <Typography variant="body2">1</Typography>
                    <Button type="button" size="small" onClick={addExtraItem}>+</Button>
                </div>
                <Button variant="contained" type="button" style={{backgroundColor: '#dc3545'}} color="primary" onClick={removeFromBasket}>Remove</Button>
            </CardActions>
        </Card>
    )
}

export default CartItem
