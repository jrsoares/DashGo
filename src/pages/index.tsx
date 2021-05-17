import { Flex, Button, Stack } from "@chakra-ui/react";
import { Input } from "../components/Form/Input";
import { SubmitHandler, useForm } from "react-hook-form";

type SignInFormData = {
  email: string;
  password: string;
};

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm();

  const handleSignin: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(values);
  };
  return (
    <Flex w="100vw" h="100vh" justifyContent="center" alignItems="center">
      <Flex
        as="form"
        width="100%"
        maxWidth="360"
        background="gray.800"
        padding="8"
        borderRadius="8"
        flexDirection="column"
        onSubmit={handleSubmit(handleSignin)}
      >
        <Stack spacing="4">
          <Input
            type="email"
            name="email"
            label="E-mail"
            {...register("email")}
          />
          <Input
            type="password"
            name="password"
            label="Senha"
            {...register("password")}
          />
        </Stack>

        <Button
          type="submit"
          marginTop="6"
          colorScheme="pink"
          size="lg"
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
