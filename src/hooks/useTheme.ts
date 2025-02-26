import { useContext } from "react";
import { ThemeContext } from "../components/ThemeProvider";

export default function useTheme() {
  return useContext(ThemeContext);
}
