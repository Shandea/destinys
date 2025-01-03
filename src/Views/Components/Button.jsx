import React from "react";

const Button = ({ text, onClick, backgroundColor, textColor }) => {
  return (
    <button className={`${backgroundColor} ${textColor} btn`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
