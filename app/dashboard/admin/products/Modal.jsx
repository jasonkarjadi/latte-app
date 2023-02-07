"use client";

import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import { poppins } from "../../../../fonts";

const RootModal = () => {
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
        <Heading margin={"3px auto"}>Product</Heading>
        <Box as="form" method="POST" position={"center"}>
          <Box
            width={"400px"}
            height={"200px"}
            border={"solid"}
            margin={"20px auto"}
          ></Box>
          <FormControl>
            <FormLabel mr={"0"}>
              <Input placeholder="Name"></Input>
            </FormLabel>
            <FormLabel mr={"0"}>
              <Input placeholder="Price"></Input>
            </FormLabel>
            <FormLabel mr={"0"}>
              <Select placeholder="Category">
                <option value="Category1">A</option>
                <option value="Category2">B</option>
                <option value="Category3">C</option>
              </Select>
            </FormLabel>
            <Button marginTop={"20px"} colorScheme="gray" variant="solid">
              Create
            </Button>
          </FormControl>
        </Box>
      </Box>
    </>
  );
};

export default RootModal;
