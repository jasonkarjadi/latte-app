"use client";

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import jwtDecode from "jwt-decode";
import NextImage from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { setAccessToken } from "../accessToken";
import { poppins } from "../fonts";
import cafeImg from "../public/contactlesspayment.jpg";

const RootPage = () => {
  const [errMsg, setErrMsg] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:2000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Accept: "application/json",
        },
        body: JSON.stringify({
          userLog: e.target.userLog.value,
          password: e.target.password.value,
        }),
        credentials: "include",
      });
      const { accessToken } = await res.json();
      setAccessToken(accessToken);
      const decoded = jwtDecode(accessToken);
      router.push(`/dashboard/${decoded.isAdmin ? "admin" : "cashier"}`);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Flex>
      <Box w={96}>
        <NextImage src={cafeImg} alt="point of sale" priority />
      </Box>
      <Flex
        flexDir="column"
        w={96}
        p={6}
        textAlign="center"
        bgColor="white"
        justifyContent="space-between"
      >
        <Box>
          <Heading className={poppins.className}>LATTE POS</Heading>
          <Text>Good day, and welcome!</Text>
        </Box>
        <Box as="form" onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel mr="0">
              <Input
                type="text"
                name="userLog"
                placeholder="Email / Phone Number"
              />
            </FormLabel>
          </FormControl>
          <FormControl>
            <FormLabel mr="0" mb={6}>
              <Input type="password" name="password" placeholder="Password" />
            </FormLabel>
          </FormControl>
          <Button type="submit" px={6} colorScheme="blue">
            Login
          </Button>
        </Box>
        <Text fontSize="x-small">
          © Purwadhika WD Latte Team 2023. All rights reserved
        </Text>
      </Flex>
    </Flex>
  );
};

export default RootPage;
