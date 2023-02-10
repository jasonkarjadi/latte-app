"use client";

import { Flex } from "@chakra-ui/react";

const Sidebar = ({ children }) => {
  return (
    <Flex
      flexDir="column"
      p={6}
      w={64}
      // bgColor="#D0B8A8"
      borderRight="solid 1px #85586F"
    >
      {children}
    </Flex>
  );
};

export default Sidebar;
