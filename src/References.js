import React, { useState, useRef, useEffect } from "react";
const References = () => {
  const [name, setName] = useState("");
  const prevValue = useRef("");
  const renderCount = useRef(0);
  useEffect(() => {
    renderCount.current = renderCount.current + 1;
    prevValue.current = name;
  }, [name]);
  return (
    <div>
      <h6>
        <code>
          <em>useRef</em>
        </code>
      </h6>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <p> Rendered {renderCount.current} times </p>
      <p>
        <em>ref</em> initialized with values persists between rerenders and
        doesn't cause render of the component as it is kept separate from the
        component rerender cycle.Current property of the object can persists
        between renders
      </p>

      <h6>
        Using <code>useRef</code> to obtain previous values of the state
        <p>
          Previous value was <em>{prevValue.current}</em> current value is{" "}
          <em>{name}</em>
        </p>
        <p>
          <em>Refs</em> can therefore be used to persist values between
          rerenders while if state was useed instead it would cause re-rendering
          everytime it would get updated
        </p>
      </h6>
    </div>
  );
};
export default References;
