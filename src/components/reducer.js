export const initialState = {
    basket: {},
};

export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => item.price + amount, 0) ; 


const reducer = (state, action) => {
    console.log(action) ; 
    switch(action.type) {
        case 'ADD_TO_BASKET' :
            let newBasket = state.basket ; 

            if (newBasket[action.item.id] !== undefined) {
                newBasket[action.item.id].quantity += 1 ;
            } else {
                newBasket[action.item.id] = action.item ; 
            }

            return { ...state, basket: newBasket } ; 

        case 'REMOVE_FROM_BASKET' :
            // let newRemoveBasket = state.basket ; 

            // if (newRemoveBasket[action.item.id] !== undefined) {
            //     if (newRemoveBasket[action.item.id].quantity === 1) {
            //         delete newRemoveBasket[action.item.id] ; 
            //     } else {
            //         newRemoveBasket[action.item.id].quantity -= 1 ; 
            //     }
            // }
            return { state } 

        default:
            return state ; 
    }
}


export default reducer ; 