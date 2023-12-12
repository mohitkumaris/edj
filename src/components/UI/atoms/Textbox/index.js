import React from "react";
import PropTypes from "prop-types";
import "./style.css";

const TextBox = (props) => {
  const { type, theme, size, onChange } = props;
  return (
    <div>
      <input type={type} theme={theme} size={size} onChange={onChange} />
    </div>
  );
};

TextBox.PropTypes = {
  type: string,
  theme: string,
  size: string,
  onChange: Function,
};

export default TextBox;
