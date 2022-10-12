function ErrorMsg({ tryNum, pista }) {
  return (
    <div className="alert alert-danger" role="alert">
      Respuesta incorrecta, pringao/a!
      <br />
      Intentos: {tryNum} <br />
      {tryNum > 2 && `Pista: ${pista}`}
    </div>
  );
}

export default ErrorMsg;
