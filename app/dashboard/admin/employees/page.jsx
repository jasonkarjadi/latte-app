"use client";

import { Box, Table, TableContainer, Th, Thead, Tr } from "@chakra-ui/react";
import RoleTable from "./RoleTable";

const UsersPage = () => {
  return (
    <>
      <Box m={("200", "50")}>
        <TableContainer>
          <Table variant="striped" colorScheme="#85586F">
            <Thead>
              <Tr>
                <Th>#</Th>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Phone No.</Th>
                <Th>Password</Th>
                <Th>Role</Th>
              </Tr>
            </Thead>
            <RoleTable></RoleTable>
            <RoleTable></RoleTable>
            <RoleTable></RoleTable>
            <RoleTable></RoleTable>
            <RoleTable></RoleTable>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default UsersPage;
