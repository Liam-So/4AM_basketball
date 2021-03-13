import React, { useState } from 'react'
import { IconButton } from '@material-ui/core'
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

    return (
        <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

            <article className="overflow-hidden rounded-lg shadow-lg">
                <img alt={product.title} className="object-contain md:object-scale-down block w-full h-96" src={product.img} />

                <header className="flex items-center justify-between leading-tight p-4 md:p-4">
                    <h1 className="text-lg">
                        <a className="no-underline hover:underline text-black" href="#">
                            {product.name}
                        </a>
                    </h1>
                    <p className="text-grey-darker text-lg">
                        ${product.price}
                    </p>
                </header>

                <footer className="flex items-center justify-between leading-none p-2 md:p-2">
                    <div className="space-x-1 flex">
                        <button className="w-9 h-9 flex items-center justify-center" onClick={handleClick} value="xs">XS</button>
                        <button className="w-9 h-9 flex items-center justify-center" onClick={handleClick} value="s">S</button>
                        <button className="w-9 h-9 flex items-center justify-center" onClick={handleClick} value="m">M</button>
                        <button className="w-9 h-9 flex items-center justify-center" onClick={handleClick} value="l">L</button>
                        <button className="w-9 h-9 flex items-center justify-center" onClick={handleClick} value="xl">XL</button>
                    </div>
                    <IconButton onClick={addToBasket} aria-label="Add to Cart"><AddShoppingCart /></IconButton>
                </footer>
            </article>
        </div>
    )
}

export default GearProduct
