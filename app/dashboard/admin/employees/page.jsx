"use client";

import { Box, Table, TableContainer, Th, Thead, Tr } from "@chakra-ui/react";
import Sidebar from "../Sidebar";
import RoleTable from "./RoleTable";

const UsersPage = () => {
  return (
    <>
      <Sidebar></Sidebar>
      <TableContainer m={6}>
        <Table variant="striped">
          <Thead>
            <Tr>
              <Th>#</Th>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Phone Number</Th>
            </Tr>
          </Thead>
          <RoleTable></RoleTable>
          <RoleTable></RoleTable>
          <RoleTable></RoleTable>
          <RoleTable></RoleTable>
          <RoleTable></RoleTable>
        </Table>
      </TableContainer>
    </>
  );
};

export default UsersPage;
