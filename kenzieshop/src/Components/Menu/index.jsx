import "./style.css";
import { useSelector } from "react-redux";

const Menu=({setShow})=>{

    const {cart} = useSelector(state=>state)

    return (
        <header>
            <div className="logo">
                <strong>KenzieShop</strong>
            </div>
            <ul className="menu">
                <li onClick={()=>setShow(true)}>Carrinho<span>{cart.length}</span></li>
                <li onClick={()=>setShow(false)}>Produtos</li>
            </ul>
        </header>
    )
}

export default Menu;