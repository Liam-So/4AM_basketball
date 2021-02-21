export const initialState = {
    basket: [],
};

export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => item.price + amount, 0) ; 


const reducer = (state, action) => {
    console.log(action) ; 
    switch(action.type) {
        case 'ADD_TO_BASKET' :
            return {
                ...state,
                basket: [...state.basket, action.item] 
            };
        // case 'ADD_TO_BASKET' :
        //     return {
        //         ...state,
        //         basket: (...state.basket[action.item.id] + 1) || 1,
        //     };
        case 'REMOVE_FROM_BASKET' :
            let newBasket = [...state.basket] ; 

            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id) ; 

            if (index >= 0) {
                newBasket.splice(index, 1) ;
            } else {
                console.warn(
                    `Cant remove product (id: ${action.id})`
                );
            }

            return { ...state, basket: newBasket } ; 
        case 'ADD_EXTRA_ITEM' :
            let newAddedBasket = [...state.basket] ; 

            const i = state.basket.findIndex((basketItem) => basketItem.id === action.id) ;

            if (i >= 0) {
                newAddedBasket.push(i, 1) ; 
            } else {
                console.warn(
                    `Can't add product` 
                );
            }

            return {...state, basket: newAddedBasket} ; 
        default:
            return state ; 
    }
}


export default reducer ; 