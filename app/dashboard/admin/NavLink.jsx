"use client";

import { Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ children, href }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      as={NextLink}
      href={href}
      _hover={{ bgColor: "#F8EDE3" }}
      h={14}
      fontWeight="bold"
      p={4}
      bgColor={isActive ? "#F8EDE3" : "transparent"}
      borderRadius={4}
    >
      {children}
    </Link>
  );
};

export default NavLink;
