"use client";

import {
  Button,
  ButtonGroup,
  Flex,
  Grid,
  HStack,
  IconButton,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { getAccessToken, setAccessToken } from "../../../../accessToken";
import ProductCard from "../../ProductCard";
import CreateButton from "../CreateButton";
import Sidebar from "../Sidebar";
import StripedTable from "../StripedTable";
import { useSearchParams } from "next/navigation";

const ProductsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [isProducts, setIsProducts] = useState(true);
  const [pageQuery, setPageQuery] = useState(1);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        setAccessToken(null);
        const accessToken = await getAccessToken();
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
        console.log(resBody);
        setData(resBody);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [isProducts, pageQuery]);

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

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
            gridGap={3}
            mb={6}
          >
            {data?.result?.map(({ id, name, image, price }) => (
              <ProductCard key={id} name={name} src={image} price={price} />
            ))}
          </Grid>
          <HStack mx="auto">
            <IconButton
              icon={<MdChevronLeft />}
              aria-label="previous list of products"
              isDisabled={pageQuery <= 1}
              onClick={() => {
                setPageQuery((val) => --val);
              }}
            />
            {/* Numered Pagination Links */}
            <IconButton
              icon={<MdChevronRight />}
              aria-label="next list of products"
              isDisabled={data ? pageQuery >= data.totalPage : true}
              onClick={() => {
                setPageQuery((val) => ++val);
              }}
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
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent as="form" onSubmit={handleSubmit}>
          <ModalHeader textAlign="center">
            {isProducts ? "Product" : "Category"}
          </ModalHeader>
          <ModalBody></ModalBody>
          <ModalFooter>
            <Button type="submit">Confirm</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
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

// const AdminLayout = ({ children }) => {
//   return (
//     <>
//       <Flex w="full" h="full">
//         <Flex
//           flexDir="column"
//           p={4}
//           w={64}
//           bgColor="#D0B8A8"
//           borderRight="solid 1px #85586F"
//         ></Flex>
//         <Flex flex={1} flexDir="column" p={6} justifyContent="space-between">
//           {children}
//         </Flex>
//       </Flex>
//     </>
//   );
// };

// export default AdminLayout;

// <TableContainer flex={1} m={6} overflowY="auto">
//           <Table variant="striped" colorScheme="blackAlpha">
//             <Thead>
//               <Tr>
//                 <Th>#</Th>
//                 <Th>Category Name</Th>
//                 <Th>Products in Category</Th>
//               </Tr>
//             </Thead>
//             <Tbody>
//               {data?.result?.map(({ name, product }, idx) => (
//                 <TableRow
//                   key={idx}
//                   dataObj={{ idx, name, count: product?.[0]?.count }}
//                 />
//               ))}
//             </Tbody>
//           </Table>
//         </TableContainer>
