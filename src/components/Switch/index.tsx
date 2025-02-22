import { Switch as WouterSwitch } from "wouter";
import { ReactNode } from "react";

export default function Switch({ children }: { children: ReactNode }) {
  return <WouterSwitch>{children}</WouterSwitch>;
}
