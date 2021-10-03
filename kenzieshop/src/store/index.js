import {createStore,combineReducers,applyMiddleware} from "redux";

import thunk from "redux-thunk";

import estoqueReducer from "./modules/products/reducers";
import cartReducer from "./modules/cart/reducer";

const reducers = combineReducers({estoque:estoqueReducer,cart:cartReducer});

const store = createStore(reducers,applyMiddleware(thunk));

export default store;