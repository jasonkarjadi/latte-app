"use client";

import {
  Box,
  Flex,
  FormLabel,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
} from "@chakra-ui/react";

const OrderItem = ({ vals, handleChange }) => {
  return (
    <Flex justify="space-between" w="full">
      <Box fontSize="small">
        <Text>{vals.name}</Text>
        <Text>Rp{vals.price.toLocaleString()}</Text>
      </Box>
      <FormLabel mr="0">
        <NumberInput
          value={vals.qty}
          min={1}
          max={99}
          w={20}
          onChange={handleChange}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormLabel>
    </Flex>
  );
};

export default OrderItem;
