import React from 'react'
import { useStateValue } from '../../../StateProvider'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

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
            <tr>
                <td className="hidden pb-4 md:table-cell">
                    <a href="#">
                        <img src={item.image} className="w-20 rounded" alt="Thumbnail"/>
                    </a>
                </td>
            <td>

            <p>{item.addedSize !== undefined ? `${item.addedSize} ${item.title}` : `${item.title}`}</p>
            </td>
                <td className="justify-center md:justify-end md:flex mt-6">
                    <div className="w-20 h-10">
                        <div className="relative flex flex-row w-full h-8 mt-3">
                            <div className="w-full flex items-center justify-around no-underline text-black">
                                <RemoveIcon fontSize="inherit" className="cursor-pointer" onClick={removeFromBasket}>-</RemoveIcon>
                                <button className=" text-sm lg:text-base font-medium" variant="subtitle1">{item.quantity}</button>
                                <AddIcon fontSize="inherit" className="cursor-pointer" onClick={addToBasket}>+</AddIcon>

                            </div>
                        </div>
                    </div>
                </td>
                <td className="hidden text-right md:table-cell">
                    <span className="text-sm lg:text-base font-medium">
                        ${item.price}
                    </span>
                </td>
                <td className="text-right">
                    <span className="text-sm lg:text-base font-medium">
                        ${item.price * item.quantity}
                    </span>
                </td>
            </tr> 
    )
}

export default CartItem
