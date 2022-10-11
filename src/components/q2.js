import NextBtn from "./nextBtn";

function Q2({ current, changeCurrent }) {
  console.log("q2 says ", current);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Nivel1</h1>
        <h2>Pregunta {current}</h2>
      </header>
      <p>
        Pregunta va aqui. Lorem Ipsum is simply dummy text of the printing and
        typesetting industry.
      </p>
      <NextBtn current={current} changeCurrent={() => changeCurrent()} />
    </div>
  );
}

export default Q2;
