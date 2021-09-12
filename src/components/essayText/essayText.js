import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Highlighter from "react-highlight-words";

require("./essayText.scss");

const EssayText = () => {
  const essayText = useSelector((state) => state.essayText);
  const showEditButton = useSelector((state) => state.showEdit);
  const fieldAnswers = useSelector((state) => state.fieldAnswers);

  const keyWords = Object.values(fieldAnswers);

  return (
    <section className="essay">
      <h1 className="essay_header">Your essay text</h1>
      <article className="essay__text">
        <Highlighter
          highlightClassName="essay__highlight"
          searchWords={keyWords}
          textToHighlight={essayText}
        />
      </article>
      {showEditButton ? (
        <Link to="/edit">
          <button className="essay__edit-button">Edit</button>
        </Link>
      ) : (
        ""
      )}
    </section>
  );
};

export default EssayText;
