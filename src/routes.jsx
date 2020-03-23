import Home from "./components/HomePage";
import Table from "./components/TablePage";
import About from "./components/AboutPage";

export default [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/table",
    exact: false,
    component: Table
  },
  {
    path: "/about",
    exact: false,
    component: About
  }
];
