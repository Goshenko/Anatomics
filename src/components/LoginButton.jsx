import React from "react";
import { useNavigate } from "react-router-dom";

const LoginButton = ({ text, width, height }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };

  return (
    <button
      onClick={handleClick}
      style={{ width: width, height: height }} // TODO: We can make significantly more reusable buttons if we define an important set of properties/functions for a button superclass/supercomponent
      className={`bg-red-600 text-white hover:bg-red-700 rounded-lg login-button-shadow transition-all duration-300 transform hover:scale-105`}
    >
      {text}
    </button>
  );
};

export default LoginButton;
