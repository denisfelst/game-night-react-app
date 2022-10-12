import logo from "./../assets/pizza.png";
import NextBtn from "./nextBtn";

function Home({ current, changeCurrent }) {
  return (
    <div className="App">
      <div className="App-home">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Game Night La Villa</h1>
        <h2>¿Listos?</h2>
        <NextBtn current={current} changeCurrent={() => changeCurrent()} />
      </div>
    </div>
  );
}

export default Home;
