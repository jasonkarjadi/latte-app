"use client";

import {
  Button,
  ButtonGroup,
  Flex,
  Grid,
  HStack,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { getAccessToken, setAccessToken } from "../../../../accessToken";
import ProductCard from "../../ProductCard";
import CreateButton from "../CreateButton";
import FormModal from "../FormModal";
import Sidebar from "../Sidebar";
import StripedTable from "../StripedTable";

const ProductsPage = () => {
  const [data, setData] = useState(null);
  const [isProducts, setIsProducts] = useState(true);
  const [selectedData, setSelectedData] = useState(null);
  const [pageQuery, setPageQuery] = useState(1);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    (async () => {
      setAccessToken(null);
      const accessToken = await getAccessToken();
      try {
        const res = await fetch(
          isProducts
            ? `http://localhost:2000/product/list?page=${pageQuery}`
            : "http://localhost:2000/category/list",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        const resBody = await res.json();
        setData(resBody);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [isProducts, pageQuery]);

  return (
    <>
      <Sidebar>
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
        <CreateButton handleClick={onOpen} />
      </Sidebar>
      {isProducts ? (
        <Flex flex={1} m={6} flexDir="column">
          <Grid
            templateColumns="repeat(6, 1fr)"
            templateRows="repeat(4, 130px)"
            gap={3}
            mb={6}
          >
            {data?.result?.[0]?.image &&
              data?.result?.map((datum) => (
                <ProductCard
                  key={datum.id}
                  datum={datum}
                  setSelectedData={setSelectedData}
                  onOpen={onOpen}
                />
              ))}
          </Grid>
          <HStack mx="auto">
            <IconButton
              icon={<MdChevronLeft />}
              aria-label="previous list of products"
              isDisabled={pageQuery <= 1}
              onClick={() => setPageQuery((val) => --val)}
            />
            {/* Numered Pagination Links */}
            <IconButton
              icon={<MdChevronRight />}
              aria-label="next list of products"
              isDisabled={pageQuery >= (data?.totalPage ?? 1)}
              onClick={() => setPageQuery((val) => ++val)}
            />
          </HStack>
        </Flex>
      ) : (
        <StripedTable
          headArr={[
            { head: "category name" },
            { head: "products in category", props: { isNumeric: true } },
          ]}
          dataArr={data?.result?.map(({ name, product }) => [
            { datum: name },
            { datum: product?.[0]?.count, props: { isNumeric: true } },
          ])}
        />
      )}
      <FormModal
        isOpen={isOpen}
        onClose={onClose}
        type={isProducts ? "product" : "category"}
        selectedData={selectedData}
      />
    </>
  );
};

export default ProductsPage;
