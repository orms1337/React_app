import HomePage from "./components/HomePage";
import Table from "./components/TablePage";

export default [
  {
    path: "/",
    exact: true,
    component: HomePage
  },
  {
    path: "/table",
    exact: false,
    component: Table
  }
];
