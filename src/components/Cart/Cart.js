import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core'
import useStyles from './styles'
import CartItem from './CartItem/CartItem'
import { useStateValue } from '../StateProvider';
import { getBasketTotal } from '../reducer';

function Cart({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) {

    const classes = useStyles() ; 

    const [{ basket }] = useStateValue() ; 

    const EmptyCart = () => {
        return <Typography variant="subtitle1" style={{height: '70vh', fontFamily: 'Lato'}}>You have no items in your shopping cart, start adding some!</Typography>
    };


    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
                {basket.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id}>
                        <CartItem item={item} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} />
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant="h4"style={{fontFamily: 'Lato'}} >Subtotal: ${getBasketTotal(basket)}</Typography>
                <div style={{paddingBottom: '20px'}}>
                    <Button className={classes.checkout} style={{fontFamily: 'Lato', backgroundColor: '#dc3545'}} size="large" type="button" variant ="contained" color="primary">
                        Checkout
                    </Button>
                </div>
            </div>

        </>
    )

    if (!cart.line_items) return 'Loading...';

    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant="h3" gutterBottom style={{fontFamily: 'Lato'}}>Your Shopping Cart</Typography>
            {/* { !cart.line_items.length  ? <EmptyCart /> : <FilledCart />} */}
            { basket.length === 0  ? <EmptyCart /> : <FilledCart />}
        </Container>
    )
}

export default Cart
