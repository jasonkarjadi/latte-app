"use client";

import { Heading, Input, Text } from "@chakra-ui/react";

const SalesPage = () => {
  return (
    <>
      <Heading>Good Job , Dear </Heading>
      <Text>Here's what happening in your sales today !</Text>

      <Input
        placeholder="Select Date and Time"
        size="md"
        type="datetime-local"
      />
      <Input type={"submit"} />
    </>
  );
};

export default SalesPage;
