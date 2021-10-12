//import { useSelector } from "react-redux";
//import { addCartThunk } from "../../store/modules/cart/thunk"
//import { useDispatch } from "react-redux";
import "./style.css";
import { useContext } from "react";
import { ProductsContext } from "../../providers/products";
import { CartContext } from "../../providers/cart";

const ProductsList=()=>{

    /*const dispatch = useDispatch()

    const estoque = useSelector(state=>state.estoque)

    const handleAdd=(produ)=>{
        dispatch(addCartThunk(produ))
    }*/

    const {products}=useContext(ProductsContext)

    const {addCart} = useContext(CartContext)

    return (
        <ul className="mercadorias">
            {console.log("estoque:",products)}
            {products.map((e,i)=>
            <li key={i} className="produto">
                    <h3>{e.name}</h3>
                    <img src={e.img} alt={e.name}/>
                    <strong> {(e.price)
                    .toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</strong>
                    <button onClick={()=>addCart(e)}>Add Carrinho</button>
            </li>)}
        </ul>
    )
}

export default ProductsList