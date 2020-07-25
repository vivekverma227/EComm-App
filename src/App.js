import React from "react";
import { Route, Switch } from 'react-router-dom';
import { render } from "@testing-library/react";

import logo from "./logo.svg";
import "./App.css";

import HomePage from './pages/homepage/homepage.component';
const HatsPage = () => (
  <div>
  <h1>HATS Page</h1>
  </div>
);



function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
