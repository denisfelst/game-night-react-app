function Input({ storeAnswer, verifyAnswer, inputType }) {
  const answerHandler = (event) => {
    const val = event.target.value;
    storeAnswer(val);
  };
  return (
    <>
      <input
        className="App-input"
        type={inputType}
        placeholder={inputType}
        onChange={answerHandler}
      />
      <button className="App-verify" onClick={() => verifyAnswer()}>
        Verificar
      </button>
    </>
  );
}

export default Input;
