"use client";

import { Box, Button, Stack, Text } from "@chakra-ui/react";

const RootModal2 = () => {
  return (
    <>
      <Box
        w="500px"
        h="200px"
        bgColor="#D0B8A8"
        justifyContent="center"
        m="80px auto"
        p="30px"
        borderRadius="10px"
      >
        <Text fontSize="xl" textAlign="center">
          Are you sure to delete [category name]
        </Text>
        <Stack spacing="250px" mt="40px">
          <Button variant="ghost">Cancel</Button>
          <Button mr="0" colorScheme="red" variant="solid">
            Confirm
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export default RootModal2;
