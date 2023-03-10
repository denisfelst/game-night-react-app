import React, { useEffect, useState } from "react";
import "./App.css";
import { elem } from "./constants";
import Home from "./components/home";
import Q1 from "./components/questions/q1";
import End from "./components/end";

function App() {
  const [current, setCurrent] = useState(0);
  const [siteToRender, setSiteToRender] = useState(
    <Home current={current} changeCurrent={() => changeCurrent()} />
  );

  const changeCurrent = () => {
    setCurrent((prevState) => prevState + 1);
  };

  useEffect(() => {
    if (current === 0) return;

    if (current === elem.length) {
      setSiteToRender(<End />);
      return;
    }

    const e = elem[current - 1];
    const site = (
      <Q1
        current={current}
        nivel={e.N}
        inputType={e.T}
        pregunta={e.Q}
        preguntaEn={e.Qen}
        preguntaFr={e.Qfr}
        pista={e.P}
        solucion={e.S}
        img={e.I}
        changeCurrent={() => changeCurrent()}
      />
    );
    setSiteToRender(site);
  }, [current]);
  return siteToRender;
}

export default App;
