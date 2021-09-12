import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { startOver } from "../../madlibs";

require("./essayEdit.scss");

const EssayEdit = () => {
  const dispatch = useDispatch();
  const essayText = useSelector((state) => state.essayText);
  const [essayEditText, setEssayEditText] = useState(essayText);
  const startOverHandler = () => {
    dispatch(startOver());
  };
  return (
    <form className="edit-essay">
      <h1 className="edit-heading">Your essay text</h1>
      <textarea
        name="edit-essay-text"
        className="edit-essay__textarea"
        rows="10"
        value={essayEditText}
        onChange={(evt) => setEssayEditText(evt.target.value)}
      />
      <Link to="/">
        <button className="edit-essay__startover" onClick={startOverHandler}>
          Start over
        </button>
      </Link>
    </form>
  );
};

export default EssayEdit;
