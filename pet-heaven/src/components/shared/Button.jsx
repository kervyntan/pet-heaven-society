import React from "react";

const Button = (props) => {
  return (
    <button
      className={props.className}
      type="submit"
      onClick={props.onClickHandler}
    >
      {props.text}
    </button>
  );
};

export default Button;
