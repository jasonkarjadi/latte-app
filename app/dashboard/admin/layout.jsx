"use client";

import { Flex, VStack } from "@chakra-ui/react";
import Btn from "./Btn.jsx";

const AdminLayout = ({ children }) => {
  return (
    <>
      <Flex cursor={"pointer"} textAlign={"center"} w="full" h={"700px"}>
        <VStack paddingBlockStart={"10"} flex={1 / 4} bg="#F8EDE3">
          <Btn>Products</Btn>
          <Btn>Users</Btn>
          <Btn>Sales</Btn>
        </VStack>
        {children}
      </Flex>
    </>
  );
};

export default AdminLayout;
