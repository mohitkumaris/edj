import React from "react";
import "./style.css";

const TextBox = (props) => {
  const { type, theme, value, onChange } = props;
  return (
    <div>
      <input type={type} theme={theme} value={value} onChange={onChange} />
    </div>
  );
};

export default TextBox;
