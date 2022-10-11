import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/home";
import Q1 from "./components/q1";
import Q2 from "./components/q2";
import Q3 from "./components/q3";

function App() {
  const [current, setCurrent] = useState(0);

  const changeCurrent = () => {
    setCurrent((prevState) => prevState + 1);
  };

  console.log("we are in ", current, "next is", current + 1);

  switch (current) {
    case 0:
      return <Home current={current} changeCurrent={() => changeCurrent()} />;
    case 1:
      return <Q1 current={current} changeCurrent={() => changeCurrent()} />;
    case 2:
      return <Q2 current={current} changeCurrent={() => changeCurrent()} />;
    case 3:
      return <Q3 current={current} changeCurrent={() => changeCurrent()} />;
    default:
      return (
        <h1>
          ERROR - <a href="/">go home</a>
        </h1>
      );
  }
}

export default App;
