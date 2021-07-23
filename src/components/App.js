import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { increment } from "../madlibs";

require("./App.scss");

const App = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  return (
    <div className="match-area">
      Counter (to make sure redux works): {counter}
      <br />
      <br />
      <button onClick={() => dispatch(increment())}>Increment</button>
    </div>
  );
};

export default App;
