import { Box, Stack, Text, Link, Icon } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";

export function SideBar() {
  return (
    <Box as="aside" width="64" marginRight="8">
      <Stack spacing="12" align="flex-start">
        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="small">
            GERAL
          </Text>
          <Stack spacing="4" marginTop="8" align="stretch">
            <Link display="flex" alignItems="center">
              <Icon as={RiDashboardLine} fontSize="20" />
              <Text marginLeft="4" fontWeight="bold">
                Dashboard
              </Text>
            </Link>
            <Link display="flex" alignItems="center">
              <Icon as={RiContactsLine} fontSize="20" />
              <Text marginLeft="4" fontWeight="bold">
                Usuários
              </Text>
            </Link>
          </Stack>
        </Box>
        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="small">
            AUTOMAÇÃO
          </Text>
          <Stack spacing="4" marginTop="8" align="stretch">
            <Link display="flex" alignItems="center">
              <Icon as={RiInputMethodLine} fontSize="20" />
              <Text marginLeft="4" fontWeight="bold">
                Formulários
              </Text>
            </Link>
            <Link display="flex" alignItems="center">
              <Icon as={RiGitMergeLine} fontSize="20" />
              <Text marginLeft="4" fontWeight="bold">
                Automação
              </Text>
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}
