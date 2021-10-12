import { ProductsProvider } from "./products";
import { CartProvider } from "./cart";

export const Provider = ({children}) => {

    return (
        <ProductsProvider>
            <CartProvider>
                 {children}
            </CartProvider>
        </ProductsProvider>
    )
}