import { Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import TableRow from "./TableRow";

const StripedTable = ({ headArr, dataArr }) => {
  return (
    <TableContainer flex={1} m={6} overflowY="auto">
      <Table variant="striped" colorScheme="blackAlpha">
        <Thead>
          <Tr>
            <Th isNumeric>#</Th>
            {headArr?.map(({ head, props }, idx) => (
              <Th key={idx} {...props}>
                {head}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {dataArr?.map((data, idx) => (
            <TableRow
              key={idx}
              dataArr={[{ datum: ++idx, props: { isNumeric: true } }, ...data]}
            />
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default StripedTable;
