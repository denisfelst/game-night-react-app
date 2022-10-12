import React, { useState } from "react";
import "./App.css";
import * as C from "./constants";
import Home from "./components/home";
import Q1 from "./components/questions/q1";
import Q2 from "./components/questions/q2";
import Q3 from "./components/questions/q3";

function App() {
  const [current, setCurrent] = useState(0);

  const changeCurrent = () => {
    setCurrent((prevState) => prevState + 1);
  };

  switch (current) {
    case 0:
      return <Home current={current} changeCurrent={() => changeCurrent()} />;

    case 1:
      return (
        <Q1
          current={current}
          inputType={C.T1}
          nivel={C.N1}
          pregunta={C.Q1}
          pista={C.P1}
          solucion={C.S1}
          changeCurrent={() => changeCurrent()}
        />
      );
    case 2:
      return (
        <Q2
          current={current}
          inputType={C.T2}
          nivel={C.N2}
          pregunta={C.Q2}
          pista={C.P2}
          solucion={C.S2}
          changeCurrent={() => changeCurrent()}
        />
      );
    case 3:
      return (
        <Q3
          current={current}
          inputType={C.T3}
          nivel={C.N3}
          pregunta={C.Q3}
          pista={C.P3}
          solucion={C.S3}
          changeCurrent={() => changeCurrent()}
        />
      );
    default:
      return (
        <h1>
          FINITO. <a href="/">Go home</a>
        </h1>
      );
  }
}

export default App;
