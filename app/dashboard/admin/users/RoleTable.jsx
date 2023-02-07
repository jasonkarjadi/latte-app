"use client";

import { Tbody, Td, Tr } from "@chakra-ui/react";

const RoleTable = ({ children }) => {
  return (
    <>
      <Tbody>
        <Tr>
          <Td>1</Td>
          <Td>Dia</Td>
          <Td>dia@mail.com</Td>
          <Td>085708120877</Td>
          <Td>******</Td>
          <Td>Cashier</Td>
        </Tr>
        {children}
      </Tbody>
    </>
  );
};

export default RoleTable;
