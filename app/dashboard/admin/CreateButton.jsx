import { Button, Icon } from "@chakra-ui/react";
import { MdAdd } from "react-icons/md";

const CreateButton = () => {
  return (
    <Button
      onClick={() => {}}
      colorScheme="orange"
      fontWeight="normal"
      fontSize="small"
    >
      Create
      <Icon as={MdAdd} ml={1} />
    </Button>
  );
};

export default CreateButton;
