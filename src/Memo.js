import React, { useState } from "react";
import { ArrowRightAltIcon } from "@material-ui/icons";
const Memo = () => {
  return (
    <div>
      <p>
        <code>useMemo</code> During an intensive re-render the performance could
        be affected adversely.When the reerender is expensive interms of
        computing then it might lead to poor user experience
        <br />
        <code>useMemo</code>{" "}
        <b>
          a.k.a <em>Memorization</em>
        </b>{" "}
        where it tends to remember the previously computed values and when
        similar computation involving the same set of parameters are encountered
        then instead of computing all over again ,the previously computed value
        is used.
      </p>
      <br />
      <code>useMemo(()=>compute(x,y,z),[x,y,z]);</code>

      <p>
        It accepts a function that executes only when the dependency changes
      </p>
      <marquee>The implementation to be executed soon</marquee>
      <a href="https://www.digitalocean.com/community/tutorials/react-usememo">
        {/* <ArrowRightAltIcon /> */}
        Read more about useMemo
      </a>
    </div>
  );
};
export default Memo;
