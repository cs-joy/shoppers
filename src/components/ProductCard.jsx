import React from "react";
import {
    Badge,
    Box,
    Circle,
    Flex,
    Icon,
    Tooltip,
    chakra,
    useColorModeValue,
    Image,
} from "@chakra-ui/react";
import "../index.css";
import { BsStar, BsCartPlusFill, BsStarHalf, BsStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CartState } from "../context/Context";
const ProductCard = ({ product }) => {
    const {
        state: { products },
        dispatch,
    } = CartState();
    return (
        <Box
            className="card-on-hover"
            m={4}
            bg={useColorModeValue("white", "gray.800")}
            maxW="sm"
            w="sm"
            borderWidth="1px"
            rounded="lg"
            shadow="lg"
            position="relative"
        >
            {product.rating.rate > 4 && (
                <Badge
                    rounded="full"
                    px="2"
                    fontSize="0.8em"
                    colorScheme="cyan"
                    position="absolute"
                    bottom="6.3rem"
                    right={2}
                    color="#000"
                    bg="yellow.300"
                >
                    BestSeller
                </Badge>
            )}
            <Link to={`/product/${product.id}`}>
                <Image
                    src={product.image}
                    alt={`Picture of ${product.name}`}
                    roundedTop="lg"
                    display="block"
                    marginLeft="auto"
                    marginRight="auto"
                    h="400px"
                    w="340px"
                    objectFit="fit"
                />
            </Link>
            <Box p="6">
                <Box d="flex" alignItems="baseline">
                    <Badge
                        rounded="full"
                        px="2"
                        fontSize="0.8em"
                        colorScheme="cyan"
                    >
                        {product.category}
                    </Badge>
                </Box>
                <Flex
                    mt="1"
                    justifyContent="space-between"
                    alignContent="center"
                >
                    <Box
                        fontSize="2xl"
                        fontWeight="semibold"
                        as="h4"
                        lineHeight="tight"
                        isTruncated
                    >
                        {product.title}
                    </Box>
                    <Link to={`/product/${product.id}`}>
                        <Icon
                            as={BsCartPlusFill}
                            h={7}
                            w={7}
                            alignSelf={"center"}
                            onClick={() =>
                                dispatch({
                                    type: "ADD_TO_CART",
                                    payload: product,
                                })
                            }
                        />
                    </Link>
                </Flex>

                <Flex justifyContent="space-between" alignContent="center">
                    <Box d="flex" alignItems="center">
                        {Array(5)
                            .fill("")
                            .map((_, i) => {
                                const roundedRating =
                                    Math.round(product.rating.count * 2) / 2;
                                if (roundedRating - i >= 1) {
                                    return (
                                        <BsStarFill
                                            key={i}
                                            style={{ marginLeft: "1" }}
                                            color={
                                                i < product.rating.count
                                                    ? "teal.500"
                                                    : "gray.300"
                                            }
                                        />
                                    );
                                }
                                if (roundedRating - i === 0.5) {
                                    return (
                                        <BsStarHalf
                                            key={i}
                                            style={{ marginLeft: "1" }}
                                        />
                                    );
                                }
                                return (
                                    <BsStar
                                        key={i}
                                        style={{ marginLeft: "1" }}
                                    />
                                );
                            })}
                        <Box as="span" ml="2" color="gray.600" fontSize="sm">
                            {product.rating.count} review
                            {product.rating.count > 1 && "s"}
                        </Box>
                    </Box>
                    <Box
                        fontSize="2xl"
                        color={useColorModeValue("gray.800", "white")}
                    >
                        <Box as="span" color={"gray.600"} fontSize="lg">
                            Rs.
                        </Box>
                        {Math.ceil(product.price * 75)}
                    </Box>
                </Flex>
            </Box>
        </Box>
    );
};

export default ProductCard;
