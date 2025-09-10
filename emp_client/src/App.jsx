import React, { useEffect, useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [salary, setSalary] = useState("");
  useEffect(() => {
    fetch("http://localhost:3000/getallemployees")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault()
    fetch("http://localhost:3000/createEmployee", {
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify({ name: name, salary: salary, role: role }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      App
      <form onSubmit={handleSubmit}>
        <label>name</label>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <br />
        <label>role</label>
        <input type="text" onChange={(e) => setRole(e.target.value)} />
        <br />
        <label>salary</label>
        <input type="text" onChange={(e) => setSalary(e.target.value)} />
        <br />
        <button>add employee details</button>
      </form>
    </div>
  );
};

export default App;
