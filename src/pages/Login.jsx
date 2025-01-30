import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "/src/assets/icons/logo_transparent.png";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
        <div className='flex flex-col items-center mb-12'>
          <h1 className="text-3xl font-bold text-center font-exo2">Welcome</h1>
          <img src={logo} alt="icon" className="w-24 h-24" />
        </div>
        <div className="space-y-4 mb-12">
          <div className="my-6">
              <input 
                type="email" 
                className="w-full p-2 rounded bg-accent text-white"
                placeholder="Email"
              />
            </div>
            <div className="my-6">
              <input 
                type="password" 
                className="w-full p-2 rounded bg-accent text-white"
                placeholder="Password"
              />
            </div>
          </div>
        <div className="w-full items-center">
          <button 
              type="submit"
              className="w-full h-12 bg-red-600 text-white hover:bg-red-700 rounded-3xl shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Login
          </button>
          <button 
            onClick={() => navigate('/')}
            className="w-full text-center mt-20 text-sm text-gray-400 hover:text-white"
          >
            Don't have an account? Sign up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;