import { Router as WouterRouter } from "wouter";
import { ReactNode } from "react";

export default function Router({ children }: { children: ReactNode }) {
  const baseUrl = import.meta.env.BASE_URL;
  let routerBase;

  if (baseUrl !== "/") {
    routerBase = baseUrl.replace(/\/$/, "");
  }

  return <WouterRouter base={routerBase}>{children}</WouterRouter>;
}
