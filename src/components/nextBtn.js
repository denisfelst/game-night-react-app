function NextBtn({ current, changeCurrent }) {
  return (
    <button className="App-btn" onClick={() => changeCurrent()}>
      {current > 0 ? "Siguiente" : "Empecemos esta vaina"}
    </button>
  );
}

export default NextBtn;
