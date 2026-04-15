// Program 2
// Demonstrate Controlled Components using input fields

import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Controlled Form</h2>

      <input
        type="text"
        name="username"
        placeholder="Enter Username"
        value={formData.username}
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="email"
        name="email"
        placeholder="Enter Email"
        value={formData.email}
        onChange={handleChange}
      />

      <h3>Username: {formData.username}</h3>
      <h3>Email: {formData.email}</h3>
    </div>
  );
}

export default App;
