import { useEffect, useState } from "react";
import Clue from "../clue";
import ErrorMsg from "../error";
import Input from "../input";
import NextBtn from "../nextBtn";
import SuccessMsg from "../success";

function Q1({
  current,
  changeCurrent,
  inputType,
  pregunta,
  pista,
  solucion,
  nivel,
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
      }, 60000)
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
            <Input
              inputType={inputType}
              storeAnswer={storeAnswer}
              verifyAnswer={verifyAnswer}
            />
          </>
        )}

        {!isCorrect && triedOnce && <ErrorMsg tryNum={tryNum} />}
        {!isCorrect && (timeOver || tryNum > 3) && <Clue pista={pista} />}
        {isCorrect && current > 0 && <SuccessMsg />}
        {isCorrect && (
          <NextBtn current={current} changeCurrent={() => changeCurrent()} />
        )}
      </header>
    </div>
  );
}

export default Q1;
