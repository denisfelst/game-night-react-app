function Input({ storeAnswer, verifyAnswer }) {
  const answerHandler = (event) => {
    const val = event.target.value;
    storeAnswer(val);
  };
  return (
    <>
      <input type="text" onChange={answerHandler} />
      <button onClick={() => verifyAnswer()}>Verificar</button>
    </>
  );
}

export default Input;
