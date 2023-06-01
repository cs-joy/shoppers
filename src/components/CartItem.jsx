import {
    Box,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
} from "@chakra-ui/react";

const CartItem = ({ product }) => {
    return (
        <Box
            role={"group"}
            p={6}
            maxW={"330px"}
            w={"full"}
            bg={useColorModeValue("white", "gray.800")}
            boxShadow={"2xl"}
            rounded={"lg"}
            pos={"relative"}
            zIndex={1}
        >
            <Image
                rounded={"lg"}
                height={250}
                width={300}
                objectFit={"fit"}
                src={product.image}
            />
            <Stack pt={10} align={"center"}>
                <Text
                    color={"gray.500"}
                    fontSize={"sm"}
                    textTransform={"uppercase"}
                >
                    {product.category}
                </Text>
                <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
                    {product.title}
                </Heading>
                <Stack direction={"row"} align={"center"}>
                    <Text fontWeight={800} fontSize={"xl"}>
                        {Math.ceil(product.price * 75)}
                    </Text>
                </Stack>
            </Stack>
        </Box>
    );
};

export default CartItem;
