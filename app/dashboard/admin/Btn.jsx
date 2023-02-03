"use client";

import { Button } from "@chakra-ui/react";

const Btn = ({ children }) => {
  return (
    <Button
      _hover={{ bg: "#D0B8A8" }}
      bg={"#F8EDE3"}
      size="md"
      height="55px"
      w={"full"}
      borderRadius="none"
      borderColor="#85586F"
    >
      {children}
    </Button>
  );
};

export default Btn;
