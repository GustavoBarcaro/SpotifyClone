import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginPage from "./containers/loginPage/LoginPage";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LoginPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
