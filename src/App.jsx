import { useState } from "react";
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
        </button>
        <p></p>
      </div>
      <p></p>
    </>
  );
}

export default App;
