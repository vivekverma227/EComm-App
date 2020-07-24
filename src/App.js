import React from "react";
import logo from "./logo.svg";
import "./App.css";

import HomePage from './pages/homepage/homepage.component';
import { render } from "@testing-library/react";

function App() {
  return (
    <div>
      <HomePage />
    </div>
  );
}

export default App;
