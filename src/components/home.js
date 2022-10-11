import { Link, Router } from "react-router-dom";
import logo from "./../assets/pizza.png";
import NextBtn from "./nextBtn";

function Home({ current, changeCurrent }) {
  return (
    <div className="App">
      <h1>EPIC GAME, current is {current}</h1>
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Listos?</h2>
      {/*       <Router>
        <Link to="/q1">Next</Link>
      </Router> */}
      <NextBtn current={current} changeCurrent={() => changeCurrent()} />
    </div>
  );
}

export default Home;
