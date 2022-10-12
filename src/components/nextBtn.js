function NextBtn({ changeCurrent }) {
  return (
    <button className="App-btn" onClick={() => changeCurrent()}>
      Siguiente
    </button>
  );
}

export default NextBtn;
