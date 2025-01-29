import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="bg-secondary p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input 
              type="email" 
              className="w-full p-2 rounded bg-accent text-white"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Password</label>
            <input 
              type="password" 
              className="w-full p-2 rounded bg-accent text-white"
              placeholder="Enter your password"
            />
          </div>
          <button 
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700"
          >
            Sign In
          </button>
        </form>
        <button 
          onClick={() => navigate('/')}
          className="mt-4 text-sm text-gray-400 hover:text-white"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default Login;