"use client";

import {
  Button,
  Center,
  ChakraProvider,
  Flex,
  Heading,
  HStack,
  Text,
} from "@chakra-ui/react";
import { poppins } from "../fonts";

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>
          <Flex h="100vh" flexDir="column" className={poppins.className}>
            <Flex
              as="header"
              h={10}
              bgColor="#eadede"
              px={4}
              justifyContent="space-between"
            >
              <Heading fontSize="xx-large" className={poppins.className}>
                latte
              </Heading>
              {true && (
                <HStack>
                  <Button>Logout</Button>
                </HStack>
              )}
            </Flex>
            <Center as="main" flex={1} bgColor="#F8EDE3">
              {children}
            </Center>
            <Center as="footer" h={10} bgColor="#eadede">
              <Text fontSize="small">
                © Purwadhika WD Latte Team 2023. All rights reserved
              </Text>
            </Center>
          </Flex>
        </ChakraProvider>
      </body>
    </html>
  );
};

export default RootLayout;
