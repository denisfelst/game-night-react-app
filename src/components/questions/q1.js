import { useState } from "react";
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

  setTimeout(() => {
    setTimeOver(true);
  }, 10000);

  const storeAnswer = (val) => {
    let fixedVal = val.trim();
    fixedVal = fixedVal.toLowerCase();
    console.log();
    setAnswer(fixedVal);
  };

  const verifyAnswer = () => {
    setTryNum((prev) => prev + 1);
    console.log(answer);
    answer === solucion ? setIsCorrect(true) : setTriedOnce(true);
  };

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
        {!isCorrect && (timeOver || tryNum > 2) && <Clue pista={pista} />}
        {isCorrect && current > 0 && <SuccessMsg />}
        {isCorrect && (
          <NextBtn current={current} changeCurrent={() => changeCurrent()} />
        )}
      </header>
    </div>
  );
}

export default Q1;
