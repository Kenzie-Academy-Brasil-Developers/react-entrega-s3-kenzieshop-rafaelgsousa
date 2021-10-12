//import { useSelector } from "react-redux";
import "./style.css";
//import { subCartThunk } from "../../store/modules/cart/thunk";
//import { useDispatch } from "react-redux";
import { useContext } from "react";
import { CartContext } from "../../providers/cart";

const Cart=()=>{

    //const dispatch = useDispatch()

    //const cart = useSelector(state=>state.cart)

    /*const handleSub=(produ)=>{
        dispatch(subCartThunk(produ))
    }*/

    const {cart,removeCart} = useContext(CartContext)

    return (
        <div className="cart">
            <ul className="lista">
                {console.log("cart:",cart)}
                {cart.map((e,i)=>
                    <li key={i} className="produto">
                        <h3>{e.name}</h3>
                        <img src={e.img} alt={e.name}/>
                        <strong>{(e.price)
                        .toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</strong>
                        <button onClick={()=>removeCart(e)}>Remover</button>
                    </li>)}    
            </ul>
            <div className="finalizar">
                <h2>Total:{(cart.reduce((a,e)=>a+e.price,0))
                .toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h2>
                <h3>Quantidade de produtos: {(cart.length)}</h3>
                <button>Finalizar compra</button>
            </div>
        </div>
    )
}

export default Cart;