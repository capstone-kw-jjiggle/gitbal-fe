import { useRoutes } from "react-router-dom";
import { mainRoutes } from "./mainRoutes";
import { loginRoutes } from "./loginRoutes";

export default function Routes() {
  return useRoutes([mainRoutes, loginRoutes]);
}
