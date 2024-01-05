import React from "react";

const ListItems = (props) => {
  const { data, displayProp } = props;
  return (
    <div>
      <ul>
        {data.map((d) => (
          <li>{d[displayProp]}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListItems;
