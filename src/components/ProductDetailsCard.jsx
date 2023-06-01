import {
    Badge,
    Button,
    Center,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";

import { Link, useParams } from "react-router-dom";
import { CartState } from "../context/Context";

const ProductDetailsCard = () => {
    const products = JSON.parse(sessionStorage.getItem("productsResults"));
    const {
        state: { cart },
        dispatch,
    } = CartState();
    console.log(cart);
    const { id } = useParams();
    const product = products.find((product) => product.id === Number(id));

    return (
        <>
            <Center py={6}>
                <Stack
                    borderWidth="1px"
                    borderRadius="lg"
                    w={{ sm: "100%", md: "540px", lg: "1000px" }}
                    height={{ sm: "476px", md: "20rem", lg: "40rem" }}
                    direction={{ base: "column", md: "row" }}
                    bg={useColorModeValue("white", "gray.900")}
                    boxShadow={"2xl"}
                    padding={4}
                >
                    <Flex flex={1} bg="blue.200">
                        <Image
                            objectFit="fit"
                            boxSize="100%"
                            src={product.image}
                        />
                    </Flex>
                    <Stack
                        flex={1}
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                        textAlign="center"
                        p={10}
                        pt={2}
                    >
                        <Heading
                            fontSize={"2xl"}
                            fontFamily={"body"}
                            marginTop="15px"
                        >
                            {product.title}
                        </Heading>

                        <Text
                            textAlign="center"
                            color={useColorModeValue("gray.700", "gray.400")}
                            px={3}
                            pt={10}
                        >
                            {product.description}
                        </Text>
                        <Stack
                            align={"left"}
                            justify={"center"}
                            direction={"row"}
                            paddingTop="20px"
                        >
                            <Badge
                                rounded="full"
                                px="2"
                                fontSize="0.8em"
                                colorScheme="cyan"
                            >
                                {product.category}
                            </Badge>
                        </Stack>

                        <Stack
                            width={"100%"}
                            mt={"3rem"}
                            direction={"row"}
                            padding={4}
                            justifyContent={"space-between"}
                            alignItems={"center"}
                        >
                            {cart.some((item) => item.id === product.id) ? (
                                <Flex
                                    direction="column"
                                    justifyContent="center"
                                >
                                    <Button
                                        flex={1}
                                        marginTop="2rem"
                                        padding="10px"
                                        fontSize={"sm"}
                                        rounded={"full"}
                                        bg={"red.400"}
                                        color={"white"}
                                        boxShadow={
                                            "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                                        }
                                        _hover={{
                                            bg: "red.300",
                                        }}
                                        _focus={{
                                            bg: "red.300",
                                        }}
                                        onClick={() => {
                                            dispatch({
                                                type: "REMOVE_FROM_CART",
                                                payload: product,
                                            });
                                        }}
                                    >
                                        Remove From Cart
                                    </Button>

                                    <Link to="/cart">
                                        <Button
                                            textDecoration="none"
                                            flex={1}
                                            padding="10px"
                                            marginTop="2rem"
                                            fontSize={"sm"}
                                            rounded={"full"}
                                            bg={"green.400"}
                                            color={"white"}
                                            boxShadow={
                                                "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                                            }
                                            _hover={{
                                                bg: "green.300",
                                            }}
                                            _focus={{
                                                bg: "green.300",
                                            }}
                                        >
                                            Proceed to Checkout
                                        </Button>
                                    </Link>
                                </Flex>
                            ) : (
                                <Button
                                    flex={1}
                                    marginTop="2rem"
                                    fontSize={"sm"}
                                    rounded={"full"}
                                    bg={"green.400"}
                                    color={"white"}
                                    boxShadow={
                                        "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                                    }
                                    _hover={{
                                        bg: "green.300",
                                    }}
                                    _focus={{
                                        bg: "green.300",
                                    }}
                                    onClick={() => {
                                        dispatch({
                                            type: "ADD_TO_CART",
                                            payload: product,
                                        });
                                    }}
                                >
                                    Add to cart
                                </Button>
                            )}
                        </Stack>
                    </Stack>
                </Stack>
            </Center>
        </>
    );
};

export default ProductDetailsCard;
