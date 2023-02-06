"use client";

import {
  Button,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

const Kategori = () => {
  return (
    <>
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
    </>
  );
};

export default Kategori;
