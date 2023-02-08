"use client";

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";

const Modal = () => {
  return (
    <>
      <Box
        h="600px"
        w="600px"
        bgColor="#D0B8A8"
        m="80px auto"
        p={8}
        textAlign="center"
      >
        <Heading m="30px auto" fontSize="3xl">
          Create User
        </Heading>
        <FormControl>
          <FormLabel mt="40px" mb="20px" mr="0">
            <Input placeholder="Name"></Input>
          </FormLabel>
          <FormLabel mr="0" mb="20px">
            <Input placeholder="Email"></Input>
          </FormLabel>
          <FormLabel mr="0" mb="20px">
            <Input placeholder="Phone Number"></Input>
          </FormLabel>
          <FormLabel mr="0" mb="20px">
            <Input placeholder="Password"></Input>
          </FormLabel>
          <FormLabel mr="0" mb="20px">
            <Input placeholder="Confirm Password"></Input>
          </FormLabel>
          <Button mt="20px" colorScheme="gray" variant="solid">
            Create
          </Button>
        </FormControl>
      </Box>
    </>
  );
};

export default Modal;
