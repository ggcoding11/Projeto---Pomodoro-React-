import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  //const [count, setCount] = useState(0);

  const [estaLigado, setEstaLigado] = useState(false);
  const [stateBotaoStartStop, setStateBotaoStartStop] = useState("START");
  const [tempoRestante, setTempoRestante] = useState(25 * 60);

  const clicarBotaoStartStop = () => {
    setEstaLigado(!estaLigado);
  };

  useEffect(() => {
    if (estaLigado == true) {
      setStateBotaoStartStop("STOP");

      setInterval(() => {
        setTempoRestante((tempoRestante) => tempoRestante - 1);
      }, 1000);
    } else {
      setStateBotaoStartStop("START");
    }
  }, [estaLigado]);

  return (
    <div className="container-fluid vh-100 py-4 main">
      <div className="row">
        <div className="col-12 text-center">
          <h1 className="text-white fw-bold">
            <span>⏰</span>
            Pomodoro Timer
          </h1>
        </div>
      </div>
      <div className="row row-buttons mt-2">
        <div className="col-12 d-flex justify-content-center gap-2">
          <button className="btn text-white fw-semibold">Pomodoro</button>
          <button className="btn text-white fw-semibold">Short Break</button>
          <button className="btn text-white fw-semibold">Long Break</button>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-12 d-flex justify-content-center">
          <div className="container-timer d-flex justify-content-center align-items-center">
            <span className="text-center text-white fw-bold" id="timer">
              {tempoRestante}
            </span>
          </div>
        </div>
      </div>
      <div className="row row-buttons mt-4">
        <div className="col-12 d-flex justify-content-center gap-2">
          <button
            onClick={clicarBotaoStartStop}
            className="btn text-white fw-semibold"
            id="start-stop"
          >
            {stateBotaoStartStop}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
