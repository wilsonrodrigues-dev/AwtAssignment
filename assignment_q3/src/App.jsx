
import React, { useState } from "react";

function App() {
  const [password, setPassword] = useState("");

  const checks = [
    {
      label: "At least 8 characters",
      valid: password.length >= 8,
    },
    {
      label: "One uppercase letter",
      valid: /[A-Z]/.test(password),
    },
    {
      label: "One lowercase letter",
      valid: /[a-z]/.test(password),
    },
    {
      label: "One number",
      valid: /[0-9]/.test(password),
    },
    {
      label: "One special character",
      valid: /[^A-Za-z0-9]/.test(password),
    },
  ];

  const strength = checks.filter(c => c.valid).length;

  return (
    <div style={{ width: "300px", margin: "40px auto" }}>
      <h2>Password Checker</h2>

      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          boxSizing: "border-box",
        }}
      />

      <h4>Password Requirements:</h4>

      {checks.map((check, index) => (
        <p key={index} style={{
          color: check.valid ? "green" : "red"
        }}>
          {check.valid ? "✓" : "✗"} {check.label}
        </p>
      ))}

      <h4>
        Strength: {
          strength <= 2 ? "Weak" :
          strength <= 4 ? "Medium" : "Strong"
        }
      </h4>

    </div>
  );
}

export default App;
