"use client";

import {
  Button,
  ButtonGroup,
  Flex,
  Grid,
  HStack,
  IconButton,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ProductCard from "../../ProductCard";
import CreateButton from "../CreateButton";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const ProductsPage = () => {
  const [isProducts, setIsProducts] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("http://localhost:2000/product/list");
        const data = await res.json();
        setProducts(data.result);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return (
    <>
      <Flex justifyContent="space-between">
        <ButtonGroup isAttached>
          <Button
            onClick={() => setIsProducts(true)}
            colorScheme={isProducts ? "blackAlpha" : "gray"}
          >
            Products
          </Button>
          <Button
            onClick={() => setIsProducts(false)}
            colorScheme={isProducts ? "gray" : "blackAlpha"}
          >
            Categories
          </Button>
        </ButtonGroup>
        <CreateButton />
      </Flex>
      {isProducts ? (
        <>
          <Grid
            templateColumns="repeat(5, 1fr)"
            templateRows="repeat(3, 150px)"
            gridGap={3}
            my={6}
          >
            {products.map(({ id, name, image, price }) => (
              <ProductCard key={id} name={name} src={image} price={price} />
            ))}
          </Grid>
          <HStack mx="auto">
            <IconButton
              icon={<MdChevronLeft />}
              aria-label="previous list of products"
              onClick={() => {}}
            />
            {/* Numbered Link to Pages */}
            <IconButton
              icon={<MdChevronRight />}
              aria-label="next list of products"
              onClick={() => {}}
            />
          </HStack>
        </>
      ) : (
        <TableContainer>
          <Table variant="striped" colorScheme="#DFD3C3">
            <Thead>
              <Tr>
                <Th>#</Th>
                <Th>Category Name</Th>
                <Th>Products</Th>
                <Th></Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>1</Td>
                <Td>Tea Latte</Td>
                <Td>4</Td>
                <Td>
                  <Button>E</Button>
                </Td>
                <Td>
                  <Button>D</Button>
                </Td>
              </Tr>
              <Tr>
                <Td>2</Td>
                <Td>Shortcake</Td>
                <Td>3</Td>
                <Td>
                  <Button>E</Button>
                </Td>
                <Td>
                  <Button>D</Button>
                </Td>
              </Tr>
              <Tr>
                <Td>3</Td>
                <Td>Espresso</Td>
                <Td>5</Td>
                <Td>
                  <Button>E</Button>
                </Td>
                <Td>
                  <Button>D</Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};

export default ProductsPage;

// import ChakraPage from "./ChakraPage";

// const getData = async () => {
//   const res = await fetch("http")
// }

// const ProductsPage = () => {
//   return <ChakraPage />;
// };

// export default ProductsPage;
