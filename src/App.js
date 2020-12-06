import React, { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [liked, incliked] = useState(0);
  function likedit() {
    const nliked = liked + 1;
    incliked(nliked);
  }
  useEffect(() => {
    console.log("clicked " + `${liked}` + " times");
  });
  return (
    <div className="App">
      <article>
        <h1>Getting started with Hooks</h1>
        <p style={{ fontSize: "2rem", fontStyle: "italic" }}>
          Hooks provide a way to use state without classes
        </p>
        <p>
          useState() returns
          <li>
            <span role="img">✏</span>️a current state value
          </li>
          <li>
            <span role="img">✏</span>️a function that is responsible for
            updating the variable
          </li>
          <li>
            <span role="img">✔</span>️useEffect is similar to didComponentMount,
            it runs everytime the DOM changes
          </li>
        </p>
      </article>
      <button onClick={likedit}>
        <span role="img">👍</span>
      </button>
      {liked}
    </div>
  );
}
