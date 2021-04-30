export const initialState = {
    basket: {},
};

export const getBasketTotal = (basket) => {
    let total = 0 ;

    let quantities = Object.values(basket) ;

    for (var i = 0 ; i < quantities.length ; i++) {
        total += quantities[i].quantity * quantities[i].price ;
    }

    return total ;
}

export const getTotalItems = (basket) => {
    let productQuantities = Object.values(basket) ;

    let cartTotal = 0 ;

    for (var i = 0 ; i < productQuantities.length ; i++) {
        cartTotal += productQuantities[i].quantity ; 
    }

    return cartTotal ; 
}

export const getGearItems = (basket) => {
    let gearSizes = Object.values(basket) ;

    return gearSizes.toString
}


const reducer = (state, action) => {
    console.log(action) ; 
    switch(action.type) {
        case 'ADD_TO_BASKET' :
            let newAddGearBasket = state.basket ; 

            console.log(newAddGearBasket)

            console.log(action.item._id)

            let newId = action.item.id ;     

            if (newAddGearBasket[newId] === undefined) {
                newAddGearBasket[newId] = action.item ; 
            } else {
                newAddGearBasket[newId].quantity += 1 ; 
            }

            console.log(newAddGearBasket)

            return { ...state, basket:newAddGearBasket }

        case 'REMOVE_FROM_BASKET' :
            let newRemoveBasket = state.basket ; 

            if (newRemoveBasket[action.id] !== undefined) {
                if (newRemoveBasket[action.id].quantity === 1) {
                    delete newRemoveBasket[action.id] ; 
                } 
                else {
                    newRemoveBasket[action.id].quantity -= 1 ; 
                }
            }
            return { ...state, basket: newRemoveBasket } 

        default:
            return state ; 
    }
}


export default reducer ; 