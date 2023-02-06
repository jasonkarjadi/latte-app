"use client";

import { Flex, Grid, Spacer, Stack } from "@chakra-ui/react";
import ProductCard from "./ProductCard";
import BtnNav from "./BtnNav";
import { useState } from "react";
import Kategori from "./Kategori";

const ProductsPage = () => {
  const [isProducts, setIsProducts] = useState(false);

  return (
    <>
      <Flex direction={"column"}>
        <Stack padding={10} spacing={"none"} direction="row" align={"center"}>
          <BtnNav>Products</BtnNav>
          <BtnNav>Categories</BtnNav>
          <Spacer />
          <BtnNav>Create +</BtnNav>
        </Stack>
        {isProducts ? (
          <Grid templateColumns="repeat(3, 1fr)" gridGap={50} padding={"50px"}>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
          </Grid>
        ) : (
          <>
            <Kategori></Kategori>
          </>
        )}
      </Flex>
    </>
  );
};

export default ProductsPage;
