"use client";

import { Box, ChakraProvider, Heading, Text, VStack } from "@chakra-ui/react";
import NextLink from "next/link";

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>
          <VStack h={"100vh"} spacing="none">
            <Box as="header" h={"40px"} w={"full"} bgColor="#eadede">
              <Heading marginLeft={"15px"}>Latte</Heading>
            </Box>
            {children}
            <Box
              as={"footer"}
              textAlign={"center"}
              h={"40px"}
              w={"full"}
              bgColor="#eadede"
            >
              <Text fontSize={"12px"}>
                © Purwadhika WD Latte Team 2023.All right reserved
              </Text>
            </Box>
          </VStack>
        </ChakraProvider>
      </body>
    </html>
  );
};

export default RootLayout;
