import NextBtn from "./nextBtn";

function Q1({ current, changeCurrent }) {
  console.log("current in Q1 is", current);

  if (current === -1) {
    console.log("question number error");
    return;
  }

  const verifyAnswer = () => {
    //if answer is correct
    // then changeCurrent()
    // else show error message
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Pregunta {current}</h1>
        <p>
          Pregunta va aqui. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.
        </p>
        <input></input>
        <NextBtn
          changeCurrent={() =>
            changeCurrent()
          } /* verifyAnswer={() => verifyAnswer()} */
        />
      </header>
    </div>
  );
}

export default Q1;
