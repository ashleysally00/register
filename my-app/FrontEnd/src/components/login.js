import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  const handleLogin = async (e) => {
    e.preventDefault();
    const values = { email, password };
    try {
      const res = await axios.post("http://localhost:5001/login", values);
      console.log("Response:", res); // Log the entire response

      if (res.data.status === "success") { // Check the correct field
        alert("Congrats, you are now logged in!");
        sessionStorage.setItem("userToken", res.data.token);
        navigate("/dashboard");
      } else {
        setErrorMessage(res.data.error || "Login failed. Please try again.");
      }
    } catch (err) {
      if (err.response) {
        setErrorMessage(err.response.data.error || "Login failed. Please try again.");
      } else {
        setErrorMessage("Login failed. Please try again.");
      }
      console.error("Error during login", err);
    }
  };

  return (
    <div className="form">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
        {errorMessage && <p>{errorMessage}</p>}
      </form>
    </div>
  );
};

export default Login;




