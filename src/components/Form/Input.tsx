import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";

type InputProps = ChakraInputProps & {
  name: string;
  label?: string;
};

export function Input({ name, label, ...rest }: InputProps) {
  return (
    <FormControl>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <ChakraInput
        name={name}
        id={name}
        focusBorderColor="pink.500"
        background="gray.900"
        variant="filled"
        _hover={{
          backgroundColor: "gray.900",
        }}
        size="lg"
        {...rest}
      />
    </FormControl>
  );
}
