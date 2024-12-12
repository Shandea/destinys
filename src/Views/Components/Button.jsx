import React from "react";

const Button = ({ text, onClick, backgroundColor, textColor }) => {
  return (
    <button
      className={`bg-${backgroundColor} text-${textColor} font-medium py-2 px-4 rounded-lg `}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
