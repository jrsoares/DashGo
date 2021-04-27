import {
  Link,
  Icon,
  Text,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import { ElementType } from "react";

type NavLinkProps = ChakraLinkProps & {
  icon: ElementType;
  children: string;
};

export function NavLink({ icon, children, ...rest }: NavLinkProps) {
  return (
    <Link display="flex" alignItems="center" {...rest}>
      <Icon as={icon} fontSize="20" />
      <Text marginLeft="4" fontWeight="bold">
        {children}
      </Text>
    </Link>
  );
}
