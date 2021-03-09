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


const reducer = (state, action) => {
    console.log(action) ; 
    switch(action.type) {
        case 'ADD_TO_BASKET' :
            let newBasket = state.basket ; 
            console.log(newBasket)

            if (newBasket[action.item.id] !== undefined) {
                newBasket[action.item.id].quantity += 1 ;
            } else {
                newBasket[action.item.id] = action.item ; 
            }

            return { ...state, basket: newBasket } ; 

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