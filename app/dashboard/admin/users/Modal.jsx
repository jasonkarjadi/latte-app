"use client";

import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
} from "@chakra-ui/react";

const Modal = () => {
  return (
    <>
      <Box
        h="600px"
        w="600px"
        bgColor={"#D0B8A8"}
        margin={"80px auto"}
        padding={8}
        textAlign={"center"}
      >
        <Heading margin={"30px auto"} fontSize={"3xl"}>
          Create Users
        </Heading>
        <FormControl>
          <FormLabel mt={"40px"} mb={"20px"} mr={"0"}>
            <Input placeholder="Name"></Input>
          </FormLabel>
          <FormLabel mr={"0"} mb={"20px"}>
            <Input placeholder="Email"></Input>
          </FormLabel>
          <FormLabel mr={"0"} mb={"20px"}>
            <Input placeholder="Phone Number"></Input>
          </FormLabel>
          <FormLabel mr={"0"} mb={"20px"}>
            <Input placeholder="Password"></Input>
          </FormLabel>
          <FormLabel mr={"0"} mb={"20px"}>
            <Input placeholder="Confirm Password"></Input>
          </FormLabel>
          <Button marginTop={"20px"} colorScheme="gray" variant="solid">
            Create
          </Button>
        </FormControl>
      </Box>
    </>
  );
};

export default Modal;
