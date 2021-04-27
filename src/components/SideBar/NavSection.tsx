import React, { ReactNode } from "react";
import { Box, Text, Link, Icon, Stack } from "@chakra-ui/react";
import { RiDashboardLine, RiContactsLine } from "react-icons/ri";

type NavSectionProps = {
  title: string,
  children: ReactNode
}

export function NavSection({title, children}: NavSectionProps) {
  return (
    <Box>
      <Text fontWeight="bold" color="gray.400" fontSize="small">
        {title}
      </Text>
      <Stack spacing="4" marginTop="8" align="stretch">
        {children}
      </Stack>
    </Box>
  );
}
