import {Switch, Route} from "react-router-dom"
import ProductsList from "../Components/ProductsList";
import Cart from "../Components/Carrinho";

function Root(){

    return <Switch>
            <Route exact path="/">
                <ProductsList/>
            </Route>
            <Route path="/carrinho">
                <Cart/>
            </Route>
        </Switch>
}

export default Root;