"use client";

import { Center, ChakraProvider } from "@chakra-ui/react";
import { poppins } from "../fonts";

const Chakra = ({ children }) => {
  return (
    <ChakraProvider>
      <Center
        h="100vh"
        flexDir="column"
        bgColor="#F8EDE3"
        className={poppins.className}
      >
        {children}
      </Center>
    </ChakraProvider>
  );
};

export default Chakra;
