import { useState } from "react";
import cookie from "/cookie-1.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Cookie Clicker</h1>
      </div>
      <h1>Cookie Clicker</h1>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
          <img src="cookie-1.png" alt="Image of a Cookie"></img>
        </button>
        <p></p>
      </div>
      <p></p>
    </>
  );
}

export default App;
