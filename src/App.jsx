import { useState } from "react";
import Button from "./components/Button.jsx";
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
        <Button />
      </div>
      <p></p>
    </>
  );
}

export default App;
