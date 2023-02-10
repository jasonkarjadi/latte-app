"use client";

import { useEffect, useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Flex,
  SimpleGrid,
  Heading,
  Select,
  Stack,
  Image,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

export default function Payment() {
  const [products, setProducts] = useState([]);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleAdd = (product) => {
    const newProduct = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: product.quantity,
    };
    setProducts([...products, newProduct]);
  };

  useEffect(() => {}, [products]);

  const handleMinus = () => {
    products.pop();
    setProducts([...products]);
  };

  const product = {
    id: 123,
    name: "kopi",
    price: 12000,
    quantity: 1,
  };
  return (
    <>
      <Flex width={"full"} height={"full"}>
        <Box flex="1" bg={"white"} justifyItems={"center"}>
          <SimpleGrid
            spacing={3}
            templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
            margin={"15px"}
          >
            <Card boxShadow={"dark-lg"}>
              <CardHeader textAlign={"center"}>
                <Heading size="md">{product.name}</Heading>
              </CardHeader>
              <CardBody margin={"auto"}>
                <Image
                  boxSize="150px"
                  objectFit="cover"
                  src="https://bit.ly/dan-abramov"
                  alt="Dan Abramov"
                />
              </CardBody>
              <CardFooter justifyContent={"center"}>
                <Button onClick={() => handleAdd(product)}>+</Button>
                <Button onClick={handleMinus}>-</Button>
              </CardFooter>
            </Card>
          </SimpleGrid>
        </Box>
        <Box flex="1" bg={"white"}>
          <Heading
            width={"100%"}
            height={"50px"}
            textAlign={"center"}
            bgColor={"#DFD3C3"}
          >
            Cart
          </Heading>
          <Center marginX={"auto"} width={"fit-content"}>
            <Select
              borderStyle={"unset"}
              borderEndStyle={"none"}
              placeholder="Dine in"
            >
              <option value="option 1">Take Away</option>
            </Select>
          </Center>
          <Flex wrap={"wrap"} justifyContent={"center"} gap={"10px"}>
            {products.map((val, index) => {
              return (
                <Text textAlign={"center"}>
                  {val.name} {val.price} {val.quantity}
                </Text>
              );
            })}
          </Flex>
          <Center as="footer" bgColor="white" mt={"10px"}>
            <Button onClick={onOpen}>Confirm Payment</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>total :</ModalBody>

                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={onClose}>
                    Confirm
                  </Button>
                  <Button onClick={onClose} variant="ghost">
                    Cancel
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Center>
        </Box>
      </Flex>
    </>
  );
}
