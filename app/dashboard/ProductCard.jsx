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
import { getAccessToken, setAccessToken } from "../../accessToken";

const ProductCard = ({ datum, setSelectedData, onOpen }) => {
  const [isHover, setIsHover] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  const handleDelete = async () => {
    setAccessToken(null);
    const accessToken = await getAccessToken();
    try {
      await fetch(`http://localhost:2000/product/delete/${data.id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <GridItem
      pos="relative"
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => {
        setIsHover(false);
        if (isDelete) setIsDelete(false);
      }}
    >
      <NextImage
        src={datum?.image}
        alt={datum?.name}
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
        {isDelete ? (
          <Text>Confirm delete?</Text>
        ) : (
          <Box>
            <Text>{datum?.name}</Text>
            <Text>Rp{datum?.price?.toLocaleString()}</Text>
          </Box>
        )}
        {isHover && (
          <HStack spacing={2} ml="auto">
            {!isDelete && (
              <IconButton
                icon={<MdEdit />}
                colorScheme="orange"
                aria-label="edit product"
                onClick={() => {
                  setSelectedData(datum);
                  onOpen();
                }}
              />
            )}
            <IconButton
              icon={<MdDelete />}
              colorScheme="red"
              aria-label="delete product"
              onClick={async () => {
                if (isDelete) {
                  await handleDelete();
                } else {
                  setIsDelete(true);
                }
              }}
            />
          </HStack>
        )}
      </Flex>
    </GridItem>
  );
};

export default ProductCard;
