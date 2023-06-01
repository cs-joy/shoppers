import {
    createContext,
    useContext,
    useState,
    useEffect,
    useReducer,
} from "react";
import { cartReducer } from "./Reducers";

export const Cart = createContext();

const Context = ({ children }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        try {
            const URL = "https://fakestoreapi.com/products";
            const getProducts = async () => {
                const response = await fetch(URL);
                const data = await response.json();
                setProducts(data);
                sessionStorage.setItem("productsResults", JSON.stringify(data));
            };
            getProducts();
        } catch (error) {
            console.error(`Error: ${error}`);
        }
    }, []);

    // console.log(products);

    const [state, dispatch] = useReducer(cartReducer, {
        products: products,
        cart: [],
    });

    return (
        <Cart.Provider value={{ products, state, dispatch }}>
            {children}
        </Cart.Provider>
    );
};

export const CartState = () => {
    return useContext(Cart);
};

export default Context;
