"use client";

import { Flex } from "@chakra-ui/react";
import NavLink from "./NavLink";
import { MdCoffee, MdPerson, MdBarChart } from "react-icons/md";

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
          <NavLink href="/dashboard/admin/products" icon={MdCoffee}>
            Products
          </NavLink>
          <NavLink href="/dashboard/admin/users" icon={MdPerson}>
            Employees
          </NavLink>
          <NavLink href="/dashboard/admin/sales" icon={MdBarChart}>
            Sales
          </NavLink>
        </Flex>
        <Flex flex={1} flexDir="column" p={6} justifyContent="space-around">
          {children}
        </Flex>
      </Flex>
    </>
  );
};

export default AdminLayout;
