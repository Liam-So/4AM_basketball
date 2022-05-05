import React, { useState } from "react";
import { IconButton } from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import { useStateValue } from "../../../StateProvider";

function GearProduct({ product }) {
  const [state, setState] = useState("");

<<<<<<< HEAD
=======
  // eslint-disable-next-line
>>>>>>> d6a00fd8c231cc83119450a05b8930cfad0b2f8c
  const [{ basket }, dispatch] = useStateValue();

  const findProduct = (arr) => {
    let res ; 
    arr.forEach(e => {
      console.log(e.size === state)
      if (e.size === state) {
        res = e ; 
      }
    })

    return res ; 
  }

  const addToBasket = () => {
    console.log(product)
    let dispatchedProduct = findProduct(product) ; 

    console.log(dispatchedProduct)

    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        _id: dispatchedProduct._id,
        id: dispatchedProduct.id,
        title: dispatchedProduct.name,
        globalId: dispatchedProduct.globalId,
        type: dispatchedProduct.type,
        image: dispatchedProduct.img,
        price: dispatchedProduct.price,
        description: dispatchedProduct.description,
        quantity: dispatchedProduct.quantity,
        size: state,
        sku: dispatchedProduct.sku,
        img: dispatchedProduct.img
      },
    });
  };


  const handleClick = (e) => {
    console.log(e.currentTarget.value)
    if (e.currentTarget.value === "XS") {
      setState("XS");
    }
    if (e.currentTarget.value === "S") {
      setState("S");
    }
    if (e.currentTarget.value === "M") {
      setState("M");
    }
    if (e.currentTarget.value === "L") {
      setState("L");
    }
    if (e.currentTarget.value === "XL") {
      setState("XL");
    }
  };

  return (
    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
      <article className="overflow-hidden rounded-lg shadow-lg">
        <img
          alt={product.title}
          className="object-contain md:object-scale-down block w-full h-96"
          src={product[0].img}
        />

        <header className="flex items-center justify-between leading-tight p-4 md:p-4">
          <h1 className="text-lg">{product[0].name}</h1>
          <p className="text-grey-darker text-lg">${product[0].price}</p>
        </header>

        <footer className="flex items-center justify-between leading-none p-2 md:p-2">
          <div className="space-x-1 flex">
            {product.map(size => (
              <button className="w-9 h-9 flex items-center justify-center"
                      onClick={handleClick}
                      value={size.size}
                      key={size.id}
              >
                {size.size}
              </button>
            ))}
          </div>
          <IconButton onClick={addToBasket} aria-label="Add to Cart">
            <AddShoppingCart />
          </IconButton>
        </footer>
      </article>
    </div>
  );
}

export default GearProduct;
