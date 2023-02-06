"use client";

import { Button } from "@chakra-ui/react";

const BtnNav = ({ children }) => {
  return (
    <>
      <Button bg={"white"} size="md">
        {children}
      </Button>
    </>
  );
};

export default BtnNav;
