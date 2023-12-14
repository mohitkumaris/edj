import React from "react";
import TextBox from "../atoms/Textbox";
import "./style.css";

const LeftPanel = (props) => {
  const { type, theme, value, onChange } = props;
  return (
    <div>
      <nav>
        <h1>Left Panel</h1>
        <TextBox type={type} theme={theme} value={value} onChange={onChange} />
      </nav>
    </div>
  );
};

export default LeftPanel;
