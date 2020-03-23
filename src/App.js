import React from "react";
import "./index.sass";
import routes from "./routes";
import { Router, Switch, Route } from "react-router-dom";
import { history } from "./helpers/history";
import DefaultLayout from "./layouts/DefaultLayout";
function App() {
  return (
    <Router history={history}>
      <DefaultLayout>
        <Switch>
          {routes.map(route => (
            <Route
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          ))}
        </Switch>
      </DefaultLayout>
    </Router>
  );
}

export default App;
