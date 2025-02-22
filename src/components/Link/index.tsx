import { Link as WouterLink } from "wouter";
import { ComponentProps } from "react";

type LinkProps = ComponentProps<"a"> & { href: string };

export default function Link({ children, ...props }: LinkProps) {
  return <WouterLink {...props}>{children}</WouterLink>;
}
