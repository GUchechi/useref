import React, { useState, useEffect, useRef } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  const divRef = useRef();
  const colors = ["red", "green", "blue", "yellow", "orange", "pink"];
  const pageRenderRef = useRef(1);

  const handleDecrement = () => {
    if (count === 0) return;
    setCount((prevCount) => prevCount - 1);
  };

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  useEffect(() => {
    pageRenderRef.current = pageRenderRef.current + 1;
  });

  return (
    <div className="App">
      <h1>Page rerender {pageRenderRef.current} times</h1>
      <div className="counter">
        <h2>{count}</h2>
        <div className="btnContainer">
          <button onClick={handleDecrement}>-1</button>
          <button onClick={handleIncrement}>+1</button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </div>
  );
}
