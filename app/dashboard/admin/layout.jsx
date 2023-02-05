"use client";

import { Box, Flex } from "@chakra-ui/react";
import Btn from "./Btn.jsx";

const AdminLayout = ({ children }) => {
  return (
    <>
      <Flex w="full" h="full">
        <Flex
          flexDir="column"
          p={4}
          w={64}
          bgColor="#D0B8A8"
          borderRight="solid 1px #85586F"
        >
          <Btn href="/dashboard/admin/products">Products</Btn>
          <Btn href="/dashboard/admin/users">Users</Btn>
          <Btn href="/dashboard/admin/sales">Sales</Btn>
        </Flex>
        <Box flex={1}>{children}</Box>
      </Flex>
    </>
  );
};

export default AdminLayout;
