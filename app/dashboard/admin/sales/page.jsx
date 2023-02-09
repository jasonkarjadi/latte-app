"use client";

import { Box, Heading, Input, Text } from "@chakra-ui/react";
import Sidebar from "../Sidebar";

const SalesPage = () => {
  return (
    <>
      <Sidebar></Sidebar>
      <Box>
        <Heading>Good Job , Dear </Heading>
        <Text>Heres what happening in your sales today !</Text>

        <Input
          placeholder="Select Date and Time"
          size="md"
          type="datetime-local"
        />
        <Input type={"submit"} />
      </Box>
    </>
  );
};

export default SalesPage;
