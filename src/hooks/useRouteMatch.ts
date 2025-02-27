import { useRoute } from "wouter";

export default function useRouteMatch(path: string) {
  const [match] = useRoute(path);

  return match;
}
