import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { increment } from "../madlibs";

require("./App.scss");

const App = ({ counter, increment }) => {
	return (
		<div className="match-area">
			<p>Counter (to make sure redux works): {counter}</p>

			<p>
				<button onClick={increment}>
					Increment
          </button>
			</p>
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
