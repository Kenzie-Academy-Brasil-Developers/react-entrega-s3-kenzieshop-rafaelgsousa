import "./style.css";
//import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../providers/cart";

const Menu=()=>{

    //const {cart} = useSelector(state=>state)
    const {cart} = useContext(CartContext)

    return (
        <header>
            <div className="logo">
                <strong>KenzieShop</strong>
            </div>
            <ul className="menu">
                <li><Link to="/carrinho">Carrinho<span>{cart.length}</span></Link></li>
                <li><Link to="/">Produtos</Link></li>
            </ul>
        </header>
    )
}

export default Menu;