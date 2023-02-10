"use client";

import {
  Box,
  Flex,
  GridItem,
  HStack,
  IconButton,
  Text,
} from "@chakra-ui/react";
import NextImage from "next/image";
import { useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";

const ProductCard = ({ name = "", src = "", price = "" }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <GridItem
      pos="relative"
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
    >
      <NextImage
        src={src}
        alt={name}
        fill={true}
        sizes="16vw"
        style={{ borderRadius: "10px" }}
      />
      <Flex
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
        flexDir="column"
        justifyContent="space-between"
      >
        <Box>
          <Text>{name}</Text>
          <Text>Rp{price.toLocaleString()}</Text>
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
      </Flex>
    </GridItem>
  );
};

export default ProductCard;
