"use client";

import { useEffect } from "react";
import { Button, Heading } from "@chakra-ui/react";

const RootError = ({ error, reset }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <Heading>Something went wrong!</Heading>
      <Button colorScheme="orange" onClick={() => reset()}>
        Try again
      </Button>
    </>
  );
};

export default RootError;
