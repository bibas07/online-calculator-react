import { useState } from "react";
import "./App.css";
function App() {
  const [result, setResult] = useState("0");
  const clickHandler = (e) => {
    setResult(result.concat(e.target.value));
  };
  const clear = () => {
    setResult("");
  };
  const backspace = () => {
    setResult(result.slice(0, -1));
  };
  const calculate = () => {
    try {
      setResult(eval(String(result)));
    } catch (err) {
      setResult("Syntax Error");
    }
  };
  return (
    <>
      <div className="container">
        <h4 style={{ textAlign: "center" }}>Online Calculator</h4>
        <input type="text" value={result} /> <br />
        <div className="keypad">
          <button onClick={clickHandler} value="0">
            0
          </button>
          <button onClick={clickHandler} value="1">
            1
          </button>
          <button onClick={clickHandler} value="2">
            2
          </button>
          <button onClick={clickHandler} value="3">
            3
          </button>
          <button onClick={clear} value="Clear" className="highlight">
            Clear
          </button>
          <button onClick={backspace} value="C" className="highlight">
            C
          </button>
          <button onClick={clickHandler} value="4">
            4
          </button>

          <button onClick={clickHandler} value="5">
            5
          </button>
          <button onClick={clickHandler} value="6">
            6
          </button>
          <button onClick={clickHandler} value="7">
            7
          </button>
          <button onClick={clickHandler} value="+" className="highlight">
            +
          </button>
          <button onClick={clickHandler} value="-" className="highlight">
            -
          </button>
          <button onClick={clickHandler} value="8">
            8
          </button>
          <button onClick={clickHandler} value="9">
            9
          </button>

          <button onClick={clickHandler} value="*" className="highlight">
            *
          </button>
          <button onClick={clickHandler} value="/" className="highlight">
            /
          </button>
          <button onClick={calculate} value="=" className="highlight">
            =
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
