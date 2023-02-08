"use client";

import { Box, GridItem, HStack, IconButton, Text } from "@chakra-ui/react";
import NextImage from "next/image";
import { useState } from "react";
import { MdEdit, MdDelete } from "react-icons/md";

const ProductCard = ({ name = "", src = "", price = "" }) => {
  const [isHover, setIsHover] = useState(false);

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
        display="flex"
        flexDir="column"
        justifyContent="space-between"
      >
        <Box>
          <Text>{name}</Text>
          <Text>Rp{price}</Text>
        </Box>
        {isHover && (
          <HStack spacing={2} ml="auto">
            <IconButton
              icon={<MdEdit />}
              colorScheme="orange"
              aria-label="edit product"
              onClick={() => {}}
            />
            <IconButton
              icon={<MdDelete />}
              colorScheme="red"
              aria-label="delete product"
              onClick={() => {}}
            />
          </HStack>
        )}
      </Box>
    </GridItem>
  );
};

export default ProductCard;
