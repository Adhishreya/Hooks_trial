import React, { useEffect, useState } from "react";
import "./styles.css";

const datas = {
  "./twitter.svg": "https://twitter.com/AdhishreyaP",
  "./github.svg": "https://github.com/Adhishreya",
  "./linkedin.svg": "https://www.linkedin.com/in/adhishreya-p-129376167/"
};
const data = Object.keys(datas);
// console.log(data);
export default function App() {
  const [liked, incliked] = useState(0);
  function likedit() {
    const nliked = liked + 1;
    incliked(nliked);
  }
  // useEffect(() => {
  //   console.log("clicked " + { liked } + " times");
  // });

  return (
    <div className="App">
      <article>
        <h1>Getting started with Hooks</h1>
        <p style={{ fontSize: "2rem", fontStyle: "italic" }}>
          <blockquote>
            "Hooks provide a way to use state without classes"
          </blockquote>
        </p>
        <hr />
        <p>
          <code>useState()</code> returns
          <li>
            <span role="img">✏</span>️a current state value
          </li>
          <li>
            <span role="img">✏</span>️a function that is responsible for
            updating the variable
            <br />
            {/* <p>
              This is similar to <code>setState</code> of the class based
              components
            </p> */}
          </li>
          <iframe
            title="snippet"
            src="https://carbon.now.sh/embed?bg=rgba%28155%2C155%2C155%2C1%29&t=material&wt=none&l=javascript&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=const%2520%255Blearn%252CsetLearn%255D%253DuseState%28%27ReactJs%27%29%253B%250A%250A%250A............%250A%250A%253Cinput%2520onChange%253D%257B%28event%29%253D%253E%257BsetLearn%28event.target.value%29%257D%257D%252F%253E%250A%250A...............%250A%253Cdiv%253EI%2520learnt%2520%257B%257D%253C%252Fdiv%253E%250A"
            style={{
              width: "647px",
              height: "365px",
              border: 0,
              transform: "scale(1)",
              overflow: "hidden"
            }}
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
          <p>
            Here as the variable{" "}
            <code style={{ background: "#9CA3AF" }}>learn</code> is initialized
            to <em>ReactJs</em>When the user enters the appropriate input , the
            value is changed by the <code>setLearn</code> method and the
            corresponding data is renrered on the DOM{" "}
          </p>
          <li>
            <span role="img">✔</span>️<code>useEffect</code> is similar to
            didComponentMount, it runs everytime the DOM changes
          </li>
        </p>
      </article>
      <button>
        <span role="img">👍</span>
      </button>

      {liked}
      <article>
        When the button is pressed, the state is updated and Dom is re-rendered
        to the user
      </article>
      <hr />

      <ul>
        {data.map((item, index) => {
          return (
            <li key={index} className="connect">
              <a href={datas[item]}>
                <img src={item} alt={item} />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
