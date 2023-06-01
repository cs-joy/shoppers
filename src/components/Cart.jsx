import { DeleteIcon } from "@chakra-ui/icons";
import {
    Text,
    List,
    Button,
    ListItem,
    Grid,
    GridItem,
    Select,
    Image,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { CartState } from "../context/Context";
import CartItem from "./CartItem";

const Cart = () => {
    const {
        state: { cart },
        dispatch,
    } = CartState();

    const [total, setTotal] = useState();

    useEffect(() => {
        let calculatedTotal = cart.reduce(
            (acc, curr) => acc + Number(curr.price) * curr.qty,
            0
        );
        setTotal(calculatedTotal * 75);
    }, [cart]);

    return (
        <div className="checkout-container">
            <div className="cart-list-container">
                <List spacing={4}>
                    {cart.length ? (
                        cart.map((product) => {
                            return (
                                <ListItem w={"80vw"}>
                                    <Grid
                                        // height={"100%"}
                                        templateColumns="repeat(5,1fr)"
                                        gap={6}
                                        padding="35px"
                                    >
                                        <GridItem w="100%" h="100">
                                            <Image
                                                h={"100px"}
                                                w={"100px"}
                                                objectFit="center"
                                                src={product.image}
                                                alt={product.title}
                                            />
                                        </GridItem>

                                        <GridItem w="100%" h="100">
                                            <Text fontSize={"2xl"}>
                                                {product.title}
                                            </Text>
                                        </GridItem>
                                        <GridItem pl={8} w="100%" h="100">
                                            <Text
                                                fontSize={"2xl"}
                                                fontWeight="500"
                                            >
                                                Rs. {product.price * 75}
                                            </Text>
                                        </GridItem>
                                        <GridItem w="100%" h="100">
                                            <Select
                                                w="100px"
                                                value={product.qty}
                                            >
                                                {[...Array(15).keys()].map(
                                                    (item) => {
                                                        return (
                                                            <option
                                                                key={item + 1}
                                                            >
                                                                {item + 1}
                                                            </option>
                                                        );
                                                    }
                                                )}
                                            </Select>
                                        </GridItem>
                                        <GridItem pl={8} w="100%" h="100">
                                            <DeleteIcon
                                                onClick={() =>
                                                    dispatch({
                                                        type: "REMOVE_FROM_CART",
                                                        payload: product,
                                                    })
                                                }
                                                h="24px"
                                                w="24px"
                                                color="red.300"
                                                cursor="pointer"
                                            />
                                        </GridItem>
                                    </Grid>
                                </ListItem>
                            );
                        })
                    ) : (
                        <h1>No product in the cart.</h1>
                    )}
                </List>
            </div>

            <div className="checkout-sidebar">
                <Text fontSize={"4xl"}>
                    Subtotal: {cart.length}{" "}
                    {cart.length <= 1 ? "item" : "items"}{" "}
                </Text>
                <Text fontSize={"3xl"} fontWeight="700">
                    {" "}
                    Total : Rs. {total}
                </Text>
                <div className="checkout-button">
                    <Button
                        bg={"green.300"}
                        type="button"
                        disabled={cart.length === 0}
                        _hover={{ bg: "green.200" }}
                    >
                        Proceed to Checkout
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
