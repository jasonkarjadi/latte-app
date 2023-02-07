"use client";

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import jwtDecode from "jwt-decode";
import { useRouter } from "next/navigation";
import { setAccessToken } from "../accessToken";
import { poppins } from "../fonts";

const RootPage = () => {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:2000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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
    <Flex h="600px">
      <Flex flexDir="column" w={96} bgColor="white" mr={8}></Flex>
      <Flex flexDir="column" w={96} p={8} textAlign="center" bgColor="white">
        <Heading mb={8} className={poppins.className}>
          welcome
        </Heading>
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
            <FormLabel mr="0">
              <Input type="password" name="password" placeholder="Password" />
            </FormLabel>
          </FormControl>
          <Button type="submit" px={8} mt={4} colorScheme="blue">
            Login
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
};

export default RootPage;
