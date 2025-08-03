import React, { useState } from "react";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  // 🟢 Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 🟢 Validate on submit
  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    // 1️⃣ Name Validation
    if (formData.name.trim().length < 5) {
      newErrors.name = "Name must have at least 5 characters.";
    }

    // 2️⃣ Email Validation
    if (!formData.email.includes("@") || !formData.email.includes(".")) {
      newErrors.email = "Email must contain @ and .";
    }

    // 3️⃣ Password Validation
    if (formData.password.length < 8) {
      newErrors.password = "Password must have at least 8 characters.";
    }

    setErrors(newErrors);

    // ✅ If no errors, submit form (here we just log the data)
    if (Object.keys(newErrors).length === 0) {
      alert("✅ Registration Successful!");
      console.log("Form Data Submitted: ", formData);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>Mail Register App</h2>
      <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <div>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        </div>

        {/* Email Field */}
        <div>
          <label>Email: </label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>

        {/* Password Field */}
        <div>
          <label>Password: </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        </div>

        <button type="submit" style={{ marginTop: "10px" }}>Register</button>
      </form>
    </div>
  );
}

export default Register;
