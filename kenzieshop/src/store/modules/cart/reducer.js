import { ADD_CART, SUB_CART } from "./actionType";

const cart = JSON.parse(localStorage.getItem("@CartKenzieshop")) || []

const cartReducer=(state=cart,action)=>{
    console.log("action:",action)
    switch(action.type){
        case ADD_CART:
            return action.update;
        case SUB_CART:
            return action.update;
        default:
            return state;
    }
}

export default cartReducer