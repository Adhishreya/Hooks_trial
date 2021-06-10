import React, { useState, useRef } from "react";
const Refer = () => {
  const [val, setVal] = useState(0);
  const inputOne = useRef();
  const inputTwo = useRef();
  const result = useRef();
  const ButtonClick = () => {
    // console.log("button click");
    inputOne.current.style.background = "blue";
    result.current.style.background = "blue";
    console.log(inputOne.current);
  };

  const TextClick = () => {
    // console.log("text click");
    inputTwo.current.style.background = "yellow";
    result.current.style.background = "yellow";
    console.log(inputTwo.current);
  };

  return (
    <div>
      <center>
        <h3>useRef()</h3>
      </center>
      <input
        ref={inputTwo}
        type="number"
        value={val}
        onChange={(e) => setVal(e.target.value)}
      />
      <input
        type="text"
        ref={inputOne}
        value={val}
        onChange={(e) => setVal(e.target.value)}
      />
      <h3 ref={result}>You have to pay {val}</h3>
      <button onClick={ButtonClick}>Dollar</button>
      <button onClick={TextClick}>Rupees</button>

      <p>
        useRefs are used to return a mutable reference object.Using this hook
        frees us from the repeated rerenders. Just the{" "}
        <b>
          <code>refs</code>
        </b>{" "}
        attribute allows us to hold a reference to a particular component for
        which it is defined.<code>.current</code> property can be used to to
        obtain the current value of the reference object.
        <code>useRefs</code> therefore returns a mutable object that is
        initialized to what value is passed as arguments in <code>()</code> The{" "}
        <code>.current</code> value of the object remains the same between
        multiple rerenders. The thing that differenciates the references fom the
        state is the fact that any change in the state value causes re-rendering
        while for that of the references we are not notified of changes made to
        the <code>.current</code> property.
      </p>
      {/* https://dmitripavlutin.com/react-useref-guide/ */}
    </div>
  );
};

export default Refer;
