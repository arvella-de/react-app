import "./Signup.css";
import { useState } from "react";
 
function Signup() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
 
  async function handleSignup(e) {
    e.preventDefault();
 
    try {
      const response = await fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, username, password })
      });
 
      const data = await response.json();
      alert(data.message);
 
      if (response.ok) {
        setName("");
        setUsername("");
        setPassword("");
      }
    } catch (error) {
      console.error(error);
      alert("Cannot connect to the server.");
    }
  }
 
  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignup}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
 
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
 
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
 
          <button type="submit" className="signup-btn">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
 
export default Signup;

