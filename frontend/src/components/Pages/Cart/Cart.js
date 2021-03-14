import React from "react";
import ReactDOM from "react-dom" ; 
import { Typography } from "@material-ui/core";
import useStyles from "./styles";
import CartItem from "./CartItem/CartItem";
import { useStateValue } from "../../StateProvider";
import { getBasketTotal } from "../../reducer";
import Topbar from "../../Topbar/Topbar";

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

function Cart() {
  const classes = useStyles();

  const [{ basket }] = useStateValue();

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: getBasketTotal(Object.values(basket)),
          },
        },
      ],
    });
  }

  const onApprove = (data, actions) => {
    return actions.order.capture() ; 
  }

  const EmptyCart = () => {
    return (
      <>
        <Typography
            className={classes.title}
            variant="h3"
            gutterBottom
            style={{ fontFamily: "Lato" }}
          >
            Your Shopping Cart
        </Typography>
        <Typography
          variant="subtitle1"
          style={{ height: "70vh", fontFamily: "Lato" }}
        >
          You have no items in your shopping cart, start adding some!
        </Typography>
      </>
      
    );
  };

  if (Object.values(basket).length === undefined) return "Loading...";

  return (
    <>
      <Topbar transparent={true} />
      {Object.values(basket).length === 0 ? <EmptyCart /> :
      (
      <div className="flex justify-center my-6">
          <div className="flex flex-col w-full p-8 text-gray-800 bg-white shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5">
            <div className="flex-1">
              <table className="w-full text-sm lg:text-base" cellSpacing="0">
                <thead>
                  <tr className="h-12 uppercase">
                    <th className="hidden md:table-cell"></th>
                    <th className="text-left">Product</th>
                    <th className="sm:text-left md:text-right lg:text-right text-left pl-5">
                      <span className="md:hidden" title="Quantity">Qtd</span>
                      <span className="hidden md:inline">Quantity</span>
                    </th>
                    <th className="hidden text-right md:table-cell">Unit price</th>
                    <th className="text-right">Total price</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.values(basket).map((item) => (
                  <CartItem key={item.id} item={item} />
                  ))}
                </tbody>
              </table>
              <hr className="pb-6 mt-6"/>
              <div className="my-4 mt-6 -mx-2 lg:flex">
                <div className="lg:px-2 lg:w-1/2">
                  <div className="p-4 bg-gray-100 rounded-full">
                    <h1 className="ml-2 font-bold uppercase">Order Details</h1>
                  </div>
                  <div className="p-4">
                        <div className="flex justify-between pt-4 border-b">
                          <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                            Total
                          </div>
                          <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                            {Object.values(basket).length === 0 ? '$0' : "$" + getBasketTotal(Object.values(basket))}
                          </div>
                        </div>
                        <PayPalButton
                          createOrder={(data, actions) => createOrder(data, actions)}
                          onApprove={(data, actions) => onApprove(data, actions)}
                          className="rounded-full"
                        />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
