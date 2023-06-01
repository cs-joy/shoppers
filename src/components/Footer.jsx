import { chakra, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <Flex
            className="footer"
            w="full"
            bg={useColorModeValue("#131a22")}
            p={1}
            alignItems="center"
            justifyContent="center"
        >
            <Flex
                w="full"
                as="footer"
                flexDir={{ base: "column", sm: "row" }}
                align="center"
                justify="space-between"
                px="6"
                py="4"
                bg={useColorModeValue("#131a22")}
                paddingLeft="3rem"
                _dark={{
                    bg: "gray.800",
                }}
            >
                <Link to="/">
                    <Text
                        fontSize="3xl"
                        fontWeight="bold"
                        color="orange.200"
                        _dark={{
                            color: "orange.200",
                            _hover: {
                                color: "orange.300",
                            },
                        }}
                        _hover={{
                            color: "orange.300",
                        }}
                    >
                        Shoppers
                    </Text>
                </Link>
                <chakra.p
                    py={{ base: "2", sm: "0" }}
                    color="orange.100"
                    fontSize="2xl"
                    _dark={{
                        color: "orange.200",
                    }}
                >
                    &copy;2022 Shoppers Inc. All rights reserved.
                </chakra.p>
                <chakra.p
                    py={{ base: "2", sm: "0" }}
                    color="orange.100"
                    _dark={{
                        color: "orange.100",
                    }}
                >
                    Made with &hearts; by Pawel.
                </chakra.p>
            </Flex>
        </Flex>
    );
};

export default Footer;
