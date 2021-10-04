import { useSelector } from "react-redux";
import { addCartThunk} from "../../store/modules/cart/thunk"
import { useDispatch } from "react-redux";
import "./style.css";

const ProductsList=()=>{

    const dispatch = useDispatch()

    const estoque = useSelector(state=>state.estoque)

    const handleAdd=(produ)=>{
        dispatch(addCartThunk(produ))
    }

    return (
        <ul className="mercadorias">
            {console.log("estoque:",estoque)}
            {estoque.map((e,i)=>
            <li key={i} className="produto">
                    <h3>{e.name}</h3>
                    <img src={e.img} alt={e.name}/>
                    <strong> {(Math.round(e.price/100)*100)
                    .toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</strong>
                    <button onClick={()=>handleAdd(e)}>Add Carrinho</button>
            </li>)}
        </ul>
    )
}

export default ProductsList