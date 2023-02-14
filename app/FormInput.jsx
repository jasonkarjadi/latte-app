import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";

const FormInput = ({ children, props, addOn }) => {
  return (
    <FormControl>
      <FormLabel mr="0" h="min-content">
        {children ??
          (addOn ? (
            <InputGroup>
              <InputLeftElement>{addOn}</InputLeftElement>
              <Input {...props} />
            </InputGroup>
          ) : (
            <Input {...props} />
          ))}
      </FormLabel>
    </FormControl>
  );
};

export default FormInput;
