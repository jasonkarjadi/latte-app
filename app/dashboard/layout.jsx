"use client";

import {
  Avatar,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  Text,
} from "@chakra-ui/react";
import jwtDecode from "jwt-decode";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { MdBarChart, MdCoffee, MdExitToApp, MdPerson } from "react-icons/md";
import { getAccessToken, setAccessToken } from "../../accessToken";
import { poppins } from "../../fonts";
import NavLink from "./admin/NavLink";

const DashboardLayout = ({ children }) => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      try {
        const accessToken = await getAccessToken();
        const decoded = jwtDecode(accessToken);
        setUser(decoded);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  const handleLogout = async () => {
    try {
      await fetch("http://localhost:2000/auth/logout", {
        method: "POST",
        credentials: "include",
      });
    } catch (err) {
      console.error(err);
    }
    router.refresh();
  };

  return (
    <>
      <Flex
        as="header"
        h={14}
        w="full"
        bgColor="#D0B8A8"
        borderBottom="solid 1px #85586F"
        justifyContent="space-between"
      >
        <HStack spacing="0">
          <Heading fontSize="x-large" mx={6} className={poppins.className}>
            LATTE POINT OF SALE
          </Heading>
          {user?.isAdmin && (
            <>
              <NavLink href="/dashboard/admin/products" icon={MdCoffee}>
                Products
              </NavLink>
              <NavLink href="/dashboard/admin/employees" icon={MdPerson}>
                Employees
              </NavLink>
              <NavLink href="/dashboard/admin/sales" icon={MdBarChart}>
                Sales
              </NavLink>
            </>
          )}
        </HStack>
        <HStack spacing="0">
          <Button
            variant="ghost"
            h="full"
            borderRadius="0"
            colorScheme="blackAlpha"
            onClick={() => {}}
          >
            <Avatar size="xs" bgColor="#F8EDE3" color="black" mr={2} />
            <Text>{user && user.name}</Text>
          </Button>
          <Button
            fontSize="small"
            display="flex"
            alignItems="center"
            h="full"
            borderRadius="0"
            colorScheme="orange"
            onClick={() => {
              setAccessToken(null);
              handleLogout();
            }}
          >
            Logout
            <Icon as={MdExitToApp} ml={1} />
          </Button>
        </HStack>
      </Flex>
      <Flex flex={1} w="full">
        {children}
      </Flex>
    </>
  );
};

export default DashboardLayout;
