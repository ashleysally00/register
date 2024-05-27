import React from "react";
import { useState } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  axios.defaults.withCredentials = true;

  const handleLogin = async (e) => {
    e.preventDefault();
    const values = { email, password };
    try {
      const res = await axios.post("http://localhost:5001/login", values);
      console.log("Response:", res); // Log the entire response
      if (res.data.Status === "Success") {
        alert("Congrats, you are now logged in!"); // Show success message
      } else {
        alert(res.data.Message);
      }
    } catch (err) {
      console.error("Error during login:", err);
      if (err.response) {
        console.log("Error response:", err.response); // Log error response
        alert(err.response.data.Message || "An error occurred during login");
      } else {
        alert("An error occurred during login");
      }
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
      </form>
    </div>
  );
};

export default Login;

//call back-end /server side API with Axios HTTP request library
//     axios
//       .post("http://localhost:5001/login", values)
//       //then get the response from the server side
//       .then((res) => {
//         if (res.data.Status === "Success") {
//           navigate("/");
//         } else {
//           alert(res.data.Message);
//         }
//       })
//       .catch((err) => console.log(err));
//   };

//   return (
//     <div className="form">
//       <h1>Login</h1>
//       <form onSubmit={handleLogin}>
//         <input
//           type="email"
//           placeholder="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />

//         <input
//           type="password"
//           placeholder="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />

//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;
