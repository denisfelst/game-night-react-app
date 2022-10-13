import { useState } from "react";

function End() {
  const [link, setLink] = useState(null);
  setTimeout(() => {
    console.log("ccc");
    setLink(<a href="/">Home</a>);
  }, 10000);
  return (
    <div className="App">
      <div className="App-home">
        <h1>
          Has llegado hasta el final.{" "}
          <span style={{ color: "green" }}>¡Felicidades!</span>
        </h1>
        <h2>Sólo te queda un paso:</h2>
        <h3 style={{ color: "red", fontSize: "52px" }}>iPad. 6969.</h3>

        <p>Date prisa!!</p>

        {link && link}
      </div>
    </div>
  );
}

export default End;
