import React from "react";
import { connect } from "react-redux";
import { increment } from "../madlibs";

require("./App.scss");

const App = ({ counter, increment }) => {
  return (
    <div className="match-area">
      Counter (to make sure redux works): {counter}
      <br />
      <br />
      <button onClick={increment}>
        Increment
      </button>
    </div>
  )
}

function mapStateToProps(state) {
  return state;
};

const mapDispatchToProps = {
  increment,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
