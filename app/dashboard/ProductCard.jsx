"use client";

import { Box, GridItem, Text } from "@chakra-ui/react";
import NextImage from "next/image";

const ProductCard = ({ name = "", src = "", price = "" }) => {
  return (
    <GridItem pos="relative">
      <NextImage
        src={`http://${src}`}
        alt={name}
        fill={true}
        style={{ borderRadius: "10px" }}
      />
      <Box
        pos="absolute"
        left="0"
        bottom="0"
        right="0"
        top="0"
        fontSize="small"
        p={3}
        color="#F8EDE3"
        bgColor="rgba(00, 00, 00, 0.2)"
        borderRadius="10px"
      >
        <Text>{name}</Text>
        <Text>Rp{price}</Text>
      </Box>
    </GridItem>
  );
};

export default ProductCard;
