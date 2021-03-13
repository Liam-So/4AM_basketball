import React from 'react'
import { Typography } from '@material-ui/core'
import { useStateValue } from '../../../StateProvider'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import DeleteIcon from '@material-ui/icons/Delete';

function CartItem({ item }) {

    const [{ basket }, dispatch] = useStateValue() ; 


    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: item.id,
        })
    };

    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: item.id,
                title: item.title,
                image: item.image,
                price: item.price,
                description: item.description,
                quantity: item.quantity,
                addedSize: item.addedSize
            }
        })
    }


    return (        
        <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

            <article className="overflow-hidden rounded-lg shadow-lg">
                <img alt={item.title} className="object-contain md:object-scale-down block w-full h-96" src={item.image} />

                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 className="text-lg">
                        <a className="no-underline hover:underline text-black" href="#">
                            {item.addedSize !== undefined ? `${item.addedSize} ${item.title}` : `${item.title}`}
                        </a>
                    </h1>
                    <p className="text-grey-darker text-lg">
                        ${item.price}
                    </p>
                </header>

                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                    <div className="flex items-center no-underline text-black">
                        <RemoveIcon className="cursor-pointer" fontSize="inherit" onClick={removeFromBasket}/>
                        <Typography className="pl-2 pr-2 md:plr-4" variant="subtitle1">{item.quantity}</Typography>
                        <AddIcon className="cursor-pointer" fontSize="inherit" onClick={addToBasket}/>
                    </div>
                    <DeleteIcon className="cursor-pointer" onClick={removeFromBasket}/>
                </footer>
            </article>
        </div>
    )
}

export default CartItem
