import React from "react";
import { useDispatch } from "react-redux";
import { submitField } from "../../madlibs";
import { FIELDS, FIELD_NAMES } from "../../constants";

require("./form.scss");

const Form = () => {
  const dispatch = useDispatch();

  const formChanged = (fieldValue, fieldName) => {
    dispatch(submitField(fieldName, fieldValue));
  };

  return (
    <form className="form">
      <h1 className="form__header">About Me</h1>
      {Object.values(FIELD_NAMES).map((fieldName) => (
        <span className="form__field">
          <label htmlFor={fieldName}>{FIELDS[fieldName]}</label>
          <input
            type="text"
            name={fieldName}
            id={fieldName}
            onBlur={(evt) => formChanged(evt.target.value, fieldName)}
          />
        </span>
      ))}
    </form>
  );
};

export default Form;
