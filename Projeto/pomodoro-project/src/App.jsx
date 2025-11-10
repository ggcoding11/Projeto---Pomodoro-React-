import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container-fluid vh-100 main">
      <div className="row">
        <div className="col-12 text-center">
          <h1 className="text-white fw-bold">
            <span>⏰</span>
            Pomodoro Timer
          </h1>
        </div>
      </div>
      <div className="row row-buttons-timers mt-2">
        <div className="col-12 d-flex justify-content-center gap-2">
          <button className="btn text-white fw-semibold">Pomodoro</button>
          <button className="btn text-white fw-semibold">Short Break</button>
          <button className="btn text-white fw-semibold">Long Break</button>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-12 d-flex justify-content-center">
          <div className="container-timer d-flex justify-content-center align-items-center">
            <span className="timer text-center text-white fw-bold">25:00</span>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-12 d-flex justify-content-center gap-2">
          <button>START</button>
          <button>STOP</button>
        </div>
      </div>
    </div>
  );
}

export default App;
