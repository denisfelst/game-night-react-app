import { useEffect, useState } from "react";
import Clue from "../clue";
import ErrorMsg from "../error";
import Input from "../input";
import NextBtn from "../nextBtn";
import SuccessMsg from "../success";
import imgPizza from "./../../assets/pizza.png";
import imgHitler from "./../../assets/hitler.jpg";

function Q1({
  current,
  changeCurrent,
  inputType,
  pregunta,
  preguntaEn,
  preguntaFr,
  pista,
  solucion,
  nivel,
  img
}) {
  const [answer, setAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [triedOnce, setTriedOnce] = useState(false);
  const [timeOver, setTimeOver] = useState(false);
  const [tryNum, setTryNum] = useState(0);
  const [timeOutArray, setTimeOutArray] = useState(null);

  //timer to show clue
  const timer = (cur) => {
    setTimeOutArray(
      setTimeout(() => {
        setTimeOver(true);
      }, 100000)
    );
  };

  const storeAnswer = (val) => {
    //let fixedVal = val.trim();
    let fixedVal = val.replace(/\s/g, "");
    fixedVal = fixedVal.toLowerCase();
    setAnswer(fixedVal);
  };

  const verifyAnswer = () => {
    setTryNum((prev) => prev + 1);
    let fixedSol = solucion.replace(/\s/g, "");
    fixedSol = fixedSol.toLowerCase();
    console.log("input", answer, "solution", fixedSol);
    answer === fixedSol ? setIsCorrect(true) : setTriedOnce(true);
  };

  const getImg = (current) => {
    let img;
    switch(current){
      case 3:
        img = imgHitler;
        break;
      default:
        img = null;
    } 
    return img;
  }

  useEffect(() => {
    // reset all values
    if (current < 2) return;
    clearTimeout(timeOutArray);
    setTimeOver(false);
    setTimeOutArray(null);
    timer(current);
    setAnswer("");
    setIsCorrect(false);
    setTriedOnce(false);
    setTryNum(0);
  }, [current]);

  return (
    <div className={`App`}>
      <header className={`App-header ${nivel}`}>
        <h1>
          <span className={`${nivel}-text`}>Nivel {nivel.substring(1)}</span> -
          Pregunta {current}
        </h1>
        {!isCorrect && (
          <>
            <p className="App-question">{pregunta}</p>
            {preguntaEn && <p className="App-question-en">{preguntaEn} <br/> {preguntaFr}</p>}
            {img && <img className="App-img" src={getImg(current)} alt={current}></img>}

            <Input
              inputType={inputType}
              storeAnswer={storeAnswer}
              verifyAnswer={verifyAnswer}
            />
          </>
        )}

        {!isCorrect && triedOnce && <ErrorMsg tryNum={tryNum} />}
        {pista && !isCorrect && (timeOver || tryNum > 3) && <Clue pista={pista} />}
        {isCorrect && current > 0 && <SuccessMsg />}
        {isCorrect && (
          <NextBtn current={current} changeCurrent={() => changeCurrent()} />
        )}
      </header>
    </div>
  );
}

export default Q1;
