import React from "react";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import useStyles from "./styles";
import CartItem from "./CartItem/CartItem";
import { useStateValue } from "../../StateProvider";
import { getBasketTotal } from "../../reducer";
import Topbar from "../../Topbar/Topbar";

function Cart() {
  const classes = useStyles();

  const [{ basket }] = useStateValue();

  const EmptyCart = () => {
    return (
      <Typography
        variant="subtitle1"
        style={{ height: "70vh", fontFamily: "Lato" }}
      >
        You have no items in your shopping cart, start adding some!
      </Typography>
    );
  };

  const FilledCart = () => (
    <>
      <div className="container my-12 mx-auto px-4 md:px-12">
            <div className="flex flex-wrap -mx-1 lg:-mx-4">
              {Object.values(basket).map((item) => (
              <CartItem item={item} />
              ))}
            </div>
      </div>
      <div className={classes.cardDetails}>
        <Typography variant="h4" style={{ fontFamily: "Lato" }}>
          Subtotal: ${getBasketTotal(Object.values(basket))}          
        </Typography>
        <div style={{ paddingBottom: "20px" }}>
          <Button
            className={classes.checkout}
            style={{ fontFamily: "Lato", backgroundColor: "#dc3545" }}
            size="large"
            type="button"
            variant="contained"
            color="primary"
          >
            Checkout
          </Button>
        </div>
      </div>
    </>
  );

  if (Object.values(basket).length === undefined) return "Loading...";

  return (
    <>
      <Topbar transparent={true}/>
      <Container>
        <Typography
          className={classes.title}
          variant="h3"
          gutterBottom
          style={{ fontFamily: "Lato" }}
        >
          Your Shopping Cart
        </Typography>
        {Object.values(basket).length === 0 ? <EmptyCart /> : <FilledCart />}
      </Container>
    </>
  );
}

export default Cart;
