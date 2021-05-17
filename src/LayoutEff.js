import React, { useLayoutEffect, useRef, useState } from "react";
const LayoutEff = () => {
  // const inputRef = useRef();
  const size = useRef();
  const [data, setData] = useState("");
  const [rect, setRect] = useState({});
  // useLayoutEfect(() => {console.log(inputRef.current.getBoundingClientRect())},[]);
  useLayoutEffect(() => {
    console.log(size.current.getBoundingClientRect());
    setRect(size.current.getBoundingClientRect());
  }, [data]);
  return (
    <div>
      <h4>useLayoutEffect()</h4>
      <p>
        The working of <code>useLayoutEffect()</code> is similar to{" "}
        <code>useEffect()</code> that is there is a dependecy list and every
        time the dependency changes the set of statements in the <em>hook</em>{" "}
        is executed
      </p>
      <input
        // ref={inputRef}
        onChange={(e) => {
          setData(e.target.value);
        }}
      />
      <div style={{ display: "flex", width: "fit-content" }} ref={size}>
        {data}
      </div>
      <p>
        The bounding width of the above div box varies as per the input{" "}
        <pre> {JSON.stringify(rect, null, 2)}</pre>
      </p>
      <a href="https://kentcdodds.com/blog/useeffect-vs-uselayouteffect">
        Read more about the difference between <code>useEffect</code> and{" "}
        <code>useLayoutEffect()</code> from here
      </a>
    </div>
  );
};

export default LayoutEff;
