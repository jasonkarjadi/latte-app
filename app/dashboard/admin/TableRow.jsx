import { IconButton, Td, Tr } from "@chakra-ui/react";
import { MdEdit, MdDelete } from "react-icons/md";

const TableRow = ({ dataArr }) => {
  return (
    <Tr>
      {dataArr?.map(({ datum, props }, idx) => (
        <Td key={idx} {...props}>
          {datum}
        </Td>
      ))}
      <Td>
        <IconButton icon={<MdEdit />} mr={4} onClick={() => {}} />
        <IconButton icon={<MdDelete />} onClick={() => {}} />
      </Td>
    </Tr>
  );
};

export default TableRow;
