import React from "react";
import TextBox from "../atoms/Textbox/Index";
import "./style.css";
import ListItems from "../atoms/ListItems/ListItems";

const LeftPanel = (props) => {
  const { type, theme, value, onChange, userData, displayProp } = props;
  return (
    <div data-testid="left">
      <nav>
        <h1>Left Panel</h1>
        <TextBox type={type} theme={theme} value={value} onChange={onChange} />
        <ListItems data={userData} displayProp={displayProp} />
      </nav>
    </div>
  );
};

export default LeftPanel;
