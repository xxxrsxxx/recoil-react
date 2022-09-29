import { lazy } from "react";
const Login = lazy(() => import("./Login"));
const NotFound = lazy(() => import("./NotFound"));
export { NotFound, Login };
