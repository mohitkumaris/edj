import React, { useState } from "react";
import "./style.css";
import LeftPanel from "../UI/molecules/LeftPanel";

const Container = () => {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <body>
      <header class="page-header">
        <h1>Header</h1>
      </header>

      <main class="page-content">
        <LeftPanel type="text" theme="" value={text} onChange={handleChange} />
        <article class="content-article">
          <h1>Main Content</h1>
        </article>
      </main>

      <footer class="page-footer">
        <h1>Footer</h1>
      </footer>
    </body>
  );
};

export default Container;
