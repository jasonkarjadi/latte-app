"use client";

import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { MdChevronLeft } from "react-icons/md";
import { getAccessToken, setAccessToken } from "../../../accessToken";

const MenuGrid = ({ categories, itemsState }) => {
  const [category, setCategory] = useState(null);
  const [data, setData] = useState(null);
  const [items, setItems] = itemsState;

  useEffect(() => {
    if (category) {
      (async () => {
        setAccessToken(null);
        const accessToken = await getAccessToken();
        try {
          const res = await fetch(
            `http://localhost:2000/product/byCategory/${category}`,
            { headers: { Authorization: `Bearer ${accessToken}` } }
          );
          const resBody = await res.json();
          setData(resBody);
        } catch (err) {
          console.error(err);
        }
      })();
    }
  }, [category]);

  return (
    <Flex flex={1} flexDir="column" m={6}>
      <Flex h={10} pos="relative">
        {category && (
          <IconButton
            icon={<MdChevronLeft />}
            aria-label="back to categories"
            variant="ghost"
            colorScheme="blackAlpha"
            onClick={() => setCategory(null)}
          />
        )}
        <Heading
          pos="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          fontSize="medium"
        >
          MENU
        </Heading>
      </Flex>
      <Box flex={1} pos="relative">
        <Grid
          pos="absolute"
          top="0"
          left="0"
          bottom="0"
          right="0"
          templateColumns={`repeat(${category ? 5 : 2}, 1fr)`}
          gap={3}
          color="#F8EDE3"
          overflowY="scroll"
          py={3}
        >
          {category
            ? data?.result?.map(({ id, name, price, image }) => (
                <GridItem
                  key={id}
                  bgImage={`url(${image})`}
                  bgRepeat="no-repeat"
                  bgSize="cover"
                  bgPos="center"
                  cursor="pointer"
                  borderRadius="10px"
                  h="150px"
                  onClick={() =>
                    setItems((val) => {
                      if (val[id]) {
                        const { [id]: omit, ...rest } = val;
                        return rest;
                      } else {
                        return { ...val, [id]: { name, price } };
                      }
                    })
                  }
                >
                  <Box
                    h="full"
                    p={3}
                    bgColor={
                      items[id]
                        ? "rgba(00, 00, 00, 0.5)"
                        : "rgba(00, 00, 00, 0.2)"
                    }
                    borderRadius="10px"
                    _hover={{ bgColor: "rgba(00, 00, 00, 0.3)" }}
                  >
                    <Text>{name}</Text>
                    <Text>Rp{price.toLocaleString()}</Text>
                  </Box>
                </GridItem>
              ))
            : categories?.map(({ id, name, product }) => (
                <GridItem
                  key={id}
                  bgImage={`url(${product[0].image})`}
                  bgRepeat="no-repeat"
                  bgSize="cover"
                  bgPos="center"
                  borderRadius="10px"
                  cursor="pointer"
                  h="300px"
                  onClick={() => setCategory(id)}
                >
                  <Center
                    as={Heading}
                    bgColor="rgba(00, 00, 00, 0.2)"
                    h="full"
                    textAlign="center"
                    borderRadius="10px"
                    _hover={{ bgColor: "rgba(00, 00, 00, 0.3)" }}
                  >
                    {name}
                  </Center>
                </GridItem>
              ))}
        </Grid>
      </Box>
    </Flex>
  );
};

export default MenuGrid;
