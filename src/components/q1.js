import NextBtn from "./nextBtn";

function Q1({ current, changeCurrent }) {
  console.log("q1 says ", current);
  current && current !== -1 && changeCurrent();
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

export default Q1;
