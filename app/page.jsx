"use client";

import { Box, Container, Flex, Input, Button, Heading } from "@chakra-ui/react";

const RootPage = () => {
  return (
    <Box flex={1} bgColor="#F8EDE3" w="full">
      <Flex
        width={"800px"}
        height={"600px"}
        my={"40px"}
        mx={"auto"}
        justifyContent={"center"}
        alignItems={"stretch"}
      >
        <Box flex={1} marginRight={"10px"} bgColor={"white"} px={"40px"}>
          <h1>hero</h1>
        </Box>
        <Box
          flex={1}
          paddingTop={"20px"}
          px={"40px"}
          textAlign={"center"}
          marginLeft={"10px"}
          bgColor={"white"}
          fontSize={"4xl"}
          fontWeight={"bold"}
        >
          <Heading padding={"30px"}>Latte</Heading>
          <Input placeholder="Username"></Input>
          <Input placeholder="Password"></Input>
          <Button px={"30px"} colorScheme="blue">
            Login
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default RootPage;
