import { useState } from "react";
import cookie from "/cookie-1.png";

export default function Button() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Cookie Clicker</h1>
      <button onClick={() => setCount((count) => count + 1)}>
        Points Collected: {count}
        <img src="cookie-1.png" alt="Image of a Cookie"></img>
      </button>
    </>
  );
}
