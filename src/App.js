import React from "react";
import "./index.sass";
import routes from "./routes";
import { Router, Switch, Route } from "react-router-dom";
import { history } from "./helpers/history";
import DefaultLayout from "./layouts/DefaultLayout";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <Router history={history}>
      <DefaultLayout>
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          ))}
        </Switch>
        <ToastContainer />
      </DefaultLayout>
    </Router>
  );
}

export default App;
