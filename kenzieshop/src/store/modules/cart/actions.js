import { ADD_CART,SUB_CART } from "./actionType"

export const addCart=(update)=>{
    return ({
        type:ADD_CART,
        update,
    })
}

export const subCart=(update)=>{
    return ({
        type:SUB_CART,
        update,
    })
}
