import {
    chakra,
    Flex,
    Text,
    Input,
    Icon,
    Button,
    ButtonGroup,
    useColorModeValue,
} from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <>
            <chakra.header>
                <Flex
                    bg={useColorModeValue("#131a22")}
                    justifyContent="space-between"
                    alignItems="center"
                    paddingBottom={3}
                >
                    <Link to="/">
                        <Text
                            color="orange.200"
                            fontSize="5xl"
                            padding="0 1rem"
                        >
                            Shoppers
                        </Text>
                    </Link>
                    <Input width="45rem" size="lg" placeholder="Search..." />
                    <ButtonGroup>
                        <Link to="/cart">
                            <Button
                                margin="0 2rem"
                                padding="0 2rem"
                                variant="solid"
                                colorScheme="green"
                            >
                                <Icon as={FaShoppingCart} marginRight="5px" />
                                Cart
                            </Button>
                        </Link>
                        <Button
                            margin="0 2rem"
                            padding="0 2rem"
                            variant="solid"
                            colorScheme="green"
                        >
                            Sign In
                        </Button>
                    </ButtonGroup>
                </Flex>
            </chakra.header>
        </>
    );
};

export default Header;
