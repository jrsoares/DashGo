import { Button } from "@chakra-ui/react";

type PaginationItemProps = {
  number: number;
  isCurrent?: boolean;
};

export function PaginationItem({
  isCurrent = false,
  number,
}: PaginationItemProps) {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="pink"
        disabled
        __disable={{
          bgColor: "pink.500",
          cursor: "pointer",
        }}
      >
        {number}
      </Button>
    );
  }
  return (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      bg="gray.700"
      __hover={{
        bg: "gray.500",
      }}
    >
      {number}
    </Button>
  );
}
