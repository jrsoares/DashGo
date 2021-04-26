import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box marginRight="4" textAlign="right">
        <Text>Júnior Soares</Text>
        <Text color="gray.300" fontSize="small">
          juniorsoaresti@gmail.com
        </Text>
      </Box>
      <Avatar
        size="md"
        name="Júnior Soares"
        src="https://github.com/jrsoares.png"
      />
    </Flex>
  );
}
