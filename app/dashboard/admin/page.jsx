"use client";

import { Box, VStack } from "@chakra-ui/react";

const AdminPage = () => {
  return (
    <>
      <Box padding={"110"} flex={3 / 4}>
        Users
        <VStack spacing={"30px"}>
          <Box>1</Box>
          <Box>2</Box>
          <Box>3</Box>
          <Box>4</Box>
          <Box>5</Box>
        </VStack>
      </Box>
    </>
  );
};

export default AdminPage;
