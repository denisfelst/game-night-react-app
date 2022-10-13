function ErrorMsg({ tryNum }) {
  return (
    <div className="alert alert-danger" role="alert">
      Respuesta incorrecta, pringao/a!
      <br />
      Intentos: {tryNum}
    </div>
  );
}

export default ErrorMsg;
