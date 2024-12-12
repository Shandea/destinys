import React from "react";

const Button = ({ text, onClick, backgroundColor, textColor }) => {
  return (
    <button
      className={`bg-${backgroundColor} text-${textColor} btn`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
