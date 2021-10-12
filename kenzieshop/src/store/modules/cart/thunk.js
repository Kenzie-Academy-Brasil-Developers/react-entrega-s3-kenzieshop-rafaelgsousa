import { addCart,subCart } from "./actions";

export const addCartThunk = (product)=>(dispatch,getState)=>{

    const {cart}=getState()

    const update = [product,...cart]
    
    localStorage.setItem("@CartKenzieshop", JSON.stringify(update))

    dispatch(addCart(update))

}

export const subCartThunk=(product)=>(dispatch,getState)=>{
    
    const {cart} = getState()

    const update = cart.filter((e)=>e.id!==product.id)

    localStorage.setItem("@CartKenzieshop", JSON.stringify(update))

    dispatch(subCart(update))
}