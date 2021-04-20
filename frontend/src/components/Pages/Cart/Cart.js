import React from "react";
import CartItem from "./CartItem/CartItem";
import { useStateValue } from "../../StateProvider";
import { getBasketTotal } from "../../reducer";
import Topbar from "../../Topbar/Topbar";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import axios from "../../../axios";
import { arrayOfItems, getBasketStock, updateStock } from "./CartServices";
import { motion } from 'framer-motion';

function Cart() {

  const [{ basket }] = useStateValue();

  const isProd = false;

  const initialOptions = {
    "client-id" : isProd === true ? process.env.REACT_APP_PAYPAL_PROD : process.env.REACT_APP_PAYPAL_SANDBOX,
    "currency" : "CAD"
  }

  const createOrder = async(data, actions) => {
    let total = getBasketTotal(Object.values(basket)) ; 

    let basketData = Object.values(basket); 

    console.log(basketData)

    // Before creating the order, we must verify if we have enough stock to purchase 
    const isValid = await getBasketStock(basketData) ; 

    // Alert user if at least one object in there cart is out of stock
    if (isValid) {
      return actions.order.create({
        purchase_units: [{
          amount: {
          currency_code: "CAD",
          value: total,
          breakdown: {
          item_total: {currency_code:"CAD", value:total}
          }
          },
          items: arrayOfItems(basket)
          }]
      });
    } else {
      alert("One or more of your items is currently out of stock")
    }
  }

  const onApprove = async (data, actions) => {
    actions.order.capture() ;

    let basketData = Object.values(basket); 
    await updateStock(basketData) ; 

    const responsePromise = await axios.post("/transactions", {
      id: data.orderID,
      amount: getBasketTotal(Object.values(basket)),
      items: Object.values(basket)
    });

    if (responsePromise.status === 201) {
      console.log("Payment was sent to DB!")
    } else {
      console.log("Something went wrong...")
    }

    window.location.href = `${process.env.REACT_APP_LOCAL_ENV}/success`
  }
  
  const onError = (err) => {
    window.location.href = `${process.env.REACT_APP_LOCAL_ENV}/paymentFailed` ; 
  }

  const EmptyCart = () => {
    return (
      <div className="flex flex-col justify-center items-center" style={{ height: "71vh", fontFamily: "Lato" }}>
        <img className="object-fill" src="https://www.rypen.com/assets/images/cart-empty.svg" alt="cart"/>
        <h1 className="px-5 text-xl md:text-2xl">You have no items in your shopping cart, start adding some!</h1>
      </div>
      
    );
  };

  const FilledCart = () => {
    return (
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
                    <PayPalScriptProvider options={initialOptions}>
                      <PayPalButtons style={{ layout: "horizontal" }} createOrder={createOrder} onApprove={onApprove} onError={onError}/>
                    </PayPalScriptProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Topbar transparent={true} />
      {Object.values(basket).length === 0 ? <EmptyCart /> : <FilledCart />}
    </motion.div>
  );
}

export default Cart;
