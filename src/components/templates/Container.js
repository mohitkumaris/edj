import React, { useState, useEffect } from "react";
import "./style.css";
import LeftPanel from "../UI/molecules/LeftPanel";

const Container = () => {
  const [text, setText] = useState("");
  const [userData, setUserData] = useState([]);
  const [formData, setFormData] = useState({
    user: "",
    userName: "",
  });
  const change = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const submit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      const sortedData = data.sort((a, b) => {
        // ascending order
        let fusername = a.name.toLowerCase();
        let lusername = b.name.toLowerCase();
        if (fusername < lusername) {
          return -1;
        }
        if (fusername > lusername) {
          return 1;
        }
        return 0;
      });
      console.log(sortedData);
      setUserData(sortedData);
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <body>
      <header class="page-header">
        <h1>Header</h1>
      </header>

      <main class="page-content">
        <LeftPanel
          type="text"
          theme=""
          value={text}
          onChange={handleChange}
          userData={userData}
          displayProp="name"
        />
        <article class="content-article">
          <h1>
            Main Content
            <form onSubmit={submit}>
              <input
                type="text"
                name="user"
                value={formData.user}
                onChange={change}
              />
              <input
                type="text"
                name="userName"
                value={formData.userName}
                onChange={change}
              />
              <button type="submit">Submit Form</button>
            </form>
          </h1>
        </article>
      </main>

      <footer class="page-footer">
        <h1>Footer</h1>
      </footer>
    </body>
  );
};

export default Container;
