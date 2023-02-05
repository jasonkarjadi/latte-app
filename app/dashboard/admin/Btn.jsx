"use client";

import { Link } from "@chakra-ui/react";
import NextLink from "next/link";

const Btn = ({ children, href }) => {
  return (
    <Link
      as={NextLink}
      href={href}
      _hover={{ bgColor: "#F8EDE3" }}
      h={14}
      fontWeight="bold"
      p={4}
    >
      {children}
    </Link>
  );
};

export default Btn;
