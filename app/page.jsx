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
import { poppins } from "../fonts";

const RootPage = () => {
  return (
    <>
      <Flex h="600px">
        <Flex flexDir="column" w={96} bgColor="white" mr={8}></Flex>
        <Flex flexDir="column" w={96} p={8} textAlign="center" bgColor="white">
          <Heading mb={8} className={poppins.className}>
            welcome
          </Heading>
          <Box
            as="form"
            action="http://localhost:2000/auth/login"
            method="post"
          >
            <FormControl>
              <FormLabel mr="0">
                <Input
                  type="text"
                  name="userLog"
                  placeholder="Username / Email / Phone Number"
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
    </>
  );
};

export default RootPage;
