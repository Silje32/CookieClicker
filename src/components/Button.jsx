import { useState } from "react";
import styles from "../styles/Button.module.css";
import cookie from "/cookie-1.png";

export default function Button() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className={styles.img}></div>
      <h1>Cookie Clicker</h1>
      <p>
        <button onClick={() => setCount((count) => count + 1)}>
          Points Collected: {count}
          <img src="cookie-1.png" alt="Image of a Cookie"></img>
        </button>
      </p>
    </>
  );
}
