import NextBtn from "./nextBtn";

function Q3({ current, changeCurrent }) {
  console.log("q3 says ", current);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Pregunta {current}</h1>
        <p>
          Pregunta va aqui. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.
        </p>
        <NextBtn current={current} changeCurrent={() => changeCurrent()} />
      </header>
    </div>
  );
}

export default Q3;
