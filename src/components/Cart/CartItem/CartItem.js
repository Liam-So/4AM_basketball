import React from 'react'
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core'
import useStyles from './styles'

function CartItem({ item, onUpdateCartQty, onRemoveFromCart }) {
    const classes = useStyles() ; 

    return (
        <Card className="cart-item">
            <CardMedia>
                <img src={item.media.source} alt={item.name} />
            </CardMedia> 
            <CardContent className={classes.cardContent} >
                <Typography style={{fontFamily: 'Lato'}} variant="h4">{item.name}</Typography>
                <Typography style={{fontFamily: 'Lato'}} variant="h5">{item.line_total.formatted_with_symbol}</Typography>
            </CardContent>
            <CardActions className={classes.CardActions}>
                <div className={classes.buttons} >
                    <Button type="button" size="small" onClick={() => onUpdateCartQty(item.id, item.quantity -1)} >-</Button>
                    <Typography>{item.quantity}</Typography>
                    <Button type="button" size="small" onClick={() => onUpdateCartQty(item.id, item.quantity +1)}>+</Button>
                </div>
                <Button variant="contained" type="button" style={{backgroundColor: '#dc3545'}} color="primary" onClick={() => onRemoveFromCart(item.id)}>Remove</Button>
            </CardActions>
        </Card>
    )
}

export default CartItem
