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

const OrderItem = ({ name, price }) => {
  return (
    <Flex justify="space-between" w="full">
      <Box fontSize="small">
        <Text>{name}</Text>
        <Text>Rp{price?.toLocaleString()}</Text>
      </Box>
      <FormLabel mr="0">
        <NumberInput defaultValue={1} min={1} max={99} w={20}>
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
