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
        <h2>Grita esto y ganaras!</h2>
        <br/>
        <h2>Shout this out, and you will win!</h2>
        <br/>
        <h2>Criez-le et vous gagnerez !</h2>
        <br/>
        <h3 style={{ color: "red", fontSize: "52px" }}>HALA MADRID</h3>

        <p>Date prisa!!</p>

        {link && link}
      </div>
    </div>
  );
}

export default End;
