import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/login.js";
import Signup from "./components/signup.js";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="Password">
          <Link to="/">Login</Link>
          <Link to="/signup">Signup</Link>

          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
