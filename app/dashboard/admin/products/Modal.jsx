"use client";

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
} from "@chakra-ui/react";

const RootModal = () => {
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
        <Heading m="3px auto">Product</Heading>
        <Box as="form">
          <Box w="400px" h="200px" border="solid" m="20px auto"></Box>
          <FormControl>
            <FormLabel mr="0">
              <Input type="file" name="image" placeholder="Image"></Input>
            </FormLabel>
          </FormControl>
          <FormControl>
            <FormLabel mr="0">
              <Input type="text" name="name" placeholder="Name"></Input>
            </FormLabel>
          </FormControl>
          <FormControl>
            <FormLabel mr="0">
              <Input type="number" name="price" placeholder="Price"></Input>
            </FormLabel>
          </FormControl>
          <FormControl>
            <FormLabel mr="0">
              <Select placeholder="Category">
                <option value="Category1">A</option>
                <option value="Category2">B</option>
                <option value="Category3">C</option>
              </Select>
            </FormLabel>
          </FormControl>
          <Button mt="20px" colorScheme="gray" variant="solid">
            Create
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default RootModal;
