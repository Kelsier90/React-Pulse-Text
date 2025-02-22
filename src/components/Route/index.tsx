import { Route as WouterRoute } from "wouter";
import { JSX } from "react";

export default function Route(props: { path: string; component: () => JSX.Element }) {
  return <WouterRoute {...props} />;
}
