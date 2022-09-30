import { lazy } from "react";
const Main = lazy(() => import("./main"));
const Login = lazy(() => import("./login"));
const NotFound = lazy(() => import("./NotFound"));
export { Main, NotFound, Login };
