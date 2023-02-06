"use client";

import { GridItem } from "@chakra-ui/react";

const ProductCard = ({ children }) => {
  return (
    <GridItem w="240px" h="160px" bgColor={"#85586F"}>
      <h4>Judul</h4>
      <h4>Harga</h4>

      {children}
    </GridItem>
  );
};

export default ProductCard;
