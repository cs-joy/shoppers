import { Box, Flex } from "@chakra-ui/react";
import React, { useContext } from "react";
import { Cart } from "../context/Context";
import ProductCard from "./ProductCard";
import "../index.css";

const Products = () => {
    const { products } = useContext(Cart);

    return (
        <Box className="products-container">
            {products.map((product) => {
                return <ProductCard product={product} key={product.id} />;
            })}
        </Box>
    );
};

export default Products;
