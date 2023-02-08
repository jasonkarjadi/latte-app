"use client";

import { Link, Icon } from "@chakra-ui/react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ children, href, icon }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      as={NextLink}
      href={href}
      h={14}
      fontWeight="bold"
      bgColor={isActive ? "#F8EDE3" : "transparent"}
      borderRadius={4}
      display="flex"
      alignItems="center"
      p={4}
      _hover={{ bgColor: "#F8EDE3" }}
    >
      <Icon as={icon} mr={1} />
      {children}
    </Link>
  );
};

export default NavLink;
