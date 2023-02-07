"use client";

import { Flex } from "@chakra-ui/react";
import NavLink from "./NavLink";

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
          <NavLink href="/dashboard/admin/products">Products</NavLink>
          <NavLink href="/dashboard/admin/users">Employees</NavLink>
          <NavLink href="/dashboard/admin/sales">Sales</NavLink>
        </Flex>
        <Flex flex={1} flexDir="column" p={6} justifyContent="space-around">
          {children}
        </Flex>
      </Flex>
    </>
  );
};

export default AdminLayout;
