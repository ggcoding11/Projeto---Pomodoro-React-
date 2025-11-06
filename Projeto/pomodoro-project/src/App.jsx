import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <h1>Pomodoro Timer</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12 d-flex justify-content-center gap-2">
          <button>Pomodoro</button>
          <button>Short Break</button>
          <button>Long Break</button>
        </div>
      </div>
      <div className="row">
        <div className="col-12 d-flex justify-content-center">
          <div className="container-timer">
            <span className="timer">25:00</span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 d-flex justify-content-center gap-2">
          <button>START</button>
          <button>STOP</button>
        </div>
      </div>
    </div>
  );
}

export default App;
