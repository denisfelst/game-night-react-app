import { useState } from "react";
import Input from "../input";
import NextBtn from "../nextBtn";

function Q3({ current, changeCurrent }) {
  const [answer, setAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const solution = "lmao";

  if (current === -1) {
    console.log("question number error");
    return;
  }

  const storeAnswer = (val) => {
    setAnswer(val);
  };

  const verifyAnswer = () => {
    if (answer === solution) changeCurrent();
    else alert("Que pringao, inténtalo de nuevo");
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Pregunta {current}</h1>
        <p>
          Pregunta va aqui. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.
        </p>

        <Input storeAnswer={storeAnswer} verifyAnswer={verifyAnswer} />
        {isCorrect && <NextBtn changeCurrent={() => changeCurrent()} />}
      </header>
    </div>
  );
}

export default Q3;
