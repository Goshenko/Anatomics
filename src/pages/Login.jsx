import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "/src/assets/icons/logo_transparent.png";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      setError("Invalid email address");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }
    // TODO: Call API to authenticate the user
    console.log("Logging in with:", email, password); // Remove this
    // If the API call is successful, navigate to the next page
    navigate("/next-page");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
        <div className="flex flex-col items-center mb-12">
          <h1 className="text-3xl font-bold text-center font-exo2">Welcome</h1>
          <img src={logo} alt="icon" className="w-24 h-24" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4 mb-12">
            <div className="my-6">
              <input
                id="login-page-email-input"
                type="email"
                className="w-full p-2 rounded bg-accent text-gray-700"
                placeholder="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="my-6">
              <input
                id="login-page-password-input"
                type="password"
                className="w-full p-2 rounded bg-accent text-gray-700"
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
          </div>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <div className="w-full items-center">
            <button
              type="submit"
              className="w-full h-12 bg-red-600 text-white hover:bg-red-700 rounded-3xl shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Login
            </button>
            <button
              onClick={() => navigate("/CreateAccount")}
              className="w-full text-center mt-20 text-sm text-gray-400 hover:text-white"
            >
              Don't have an account? Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;