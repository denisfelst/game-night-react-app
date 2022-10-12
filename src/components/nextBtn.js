function NextBtn({ changeCurrent }) {
  return (
    <div className="App-btn">
      <button className="App-link" onClick={() => changeCurrent()}>
        NEXT
      </button>
    </div>
  );
}

export default NextBtn;
