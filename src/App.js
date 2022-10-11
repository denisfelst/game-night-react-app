import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/home";
import Q1 from "./components/q1";
import Q2 from "./components/q2";
import Q3 from "./components/q3";

function App(props) {
  const [current, setCurrent] = useState(0);

  const [q0, setQ0] = useState(true);
  const [q1, setQ1] = useState(false);
  const [q2, setQ2] = useState(false);
  const [q3, setQ3] = useState(false);

  const changeCurrent = (props) => {
    console.log("=====SET=====");
    setCurrent((prevState) => prevState + 1);
  };
  const resetCurrent = (props) => {
    console.log("=====RESET=====");
    setCurrent(0);
  };
  console.log("latest is ", current);

  return (
    <Router>
      <div>
        {(current === 0) &
        (
          <ul>
            <li>
              <Link to="/q1">1</Link>
            </li>

            <li>
              <Link to="/q2">2</Link>
            </li>

            <li>
              <Link to="/q3">3</Link>
            </li>
          </ul>
        )}
        <hr />
        <Switch>
          <Route exact path="/">
            <Home
              current={current === 0 ? current : null}
              changeCurrent={() => changeCurrent()}
            />
          </Route>

          <Route path="/q1">
            <Q1
              current={current === 1 ? current : -1}
              changeCurrent={() => changeCurrent()}
            />
          </Route>

          <Route path="/q2">
            <Q2
              current={current === 2 ? current : null}
              changeCurrent={() => changeCurrent()}
            />
          </Route>

          <Route path="/q3">
            <Q3
              current={current === 3 ? current : null}
              changeCurrent={() => changeCurrent()}
            />
          </Route>

          <Route path="/qNaN">
            <h1>
              ERROR - <a href="/">go home</a>
            </h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
