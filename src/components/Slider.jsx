import React, { useEffect, useState } from "react";
import { Text, Box, Flex, useColorModeValue, Image } from "@chakra-ui/react";

const Slider = () => {
    const slides = [
        {
            img: "https://img.freepik.com/free-vector/modern-super-sale-promotion-bright-banner_1055-6985.jpg?w=1380&t=st=1650735467~exp=1650736067~hmac=45f61a6293805567052eec916541f02506b91deda1f48ec49417a552cec4c20e",
        },
        {
            img: "https://res.cloudinary.com/itspawel/image/upload/v1650736326/sale_fiioei.jpg",
        },
        {
            img: "https://res.cloudinary.com/itspawel/image/upload/v1650736795/online-shopping-store-with-mobile-shopping-cart-mail-clouds-realistic-style-vector-illustration_548887-136_zzflai.jpg",
        },
        {
            img: "https://res.cloudinary.com/itspawel/image/upload/v1650738375/horizontal-sale-banner-template_23-2148897328_ynqrny.jpg",
        },
        {
            img: "https://res.cloudinary.com/itspawel/image/upload/v1650737396/new-collection-fashion-sale-web-banner-template_120329-1507_od4zft.jpg",
        },
    ];
    const [currentSlide, setCurrentSlide] = useState(0);

    const slidesCount = slides.length;

    const carouselStyle = {
        transition: "all .5s",
        ml: `-${currentSlide * 100}%`,
    };

    const SLIDES_INTERVAL_TIME = 3000;
    const ANIMATION_DIRECTION = "right";

    useEffect(() => {
        const prevSlide = () => {
            setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
        };

        const nextSlide = () => {
            setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
        };

        const automatedSlide = setInterval(() => {
            ANIMATION_DIRECTION.toLowerCase() === "left"
                ? prevSlide()
                : nextSlide();
        }, SLIDES_INTERVAL_TIME);
        return () => clearInterval(automatedSlide);
    }, [slidesCount]);

    return (
        <Flex
            w="100vw"
            bg={useColorModeValue("gray.800", "gray.600")}
            p={0}
            alignItems="center"
            justifyContent="center"
        >
            <Flex w="full" overflow="hidden" >
                <Flex pos="relative" h="500px" w="full" {...carouselStyle}>
                    {slides.map((slide, sid) => (
                        <Box
                            key={`slide-${sid}`}
                            flex="none"
                            boxSize="full"
                            shadow="md"
                        >
                            <Text
                                color="white"
                                fontSize="xs"
                                p="8px 12px"
                                pos="absolute"
                                top="0"
                                whiteSpace="nowrap"
                            >
                                {sid + 1} / {slidesCount}
                            </Text>
                            <Image
                                src={slide.img}
                                alt="carousel image"
                                boxSize="full"
                                backgroundSize="cover"
                            />
                        </Box>
                    ))}
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Slider;
