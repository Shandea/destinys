import React from 'react'
const Button = ({
    text,
    onClick,
    backgroundColor = "#d63d52",
    color = '#fceced',
    style = {},
    disabled = false,
  }) => {
    
    const baseStyles = {
      backgroundColor,
      color,
      fontSize: '16px',
      fontWeight: '500',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '8px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.6 : 1,
      ...style, 
    };
  
    return (
      <button style={baseStyles} onClick={onClick} disabled={disabled}>
        {text}
      </button>
    );
  };
  
export default Button;