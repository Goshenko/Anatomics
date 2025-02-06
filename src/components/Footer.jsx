import React from "react";
import GitHubIcon from "/src/assets/icons/github.png";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-2">
      <div className="flex flex-col md:flex-row justify-center items-center text-xs">
        <p>&copy; {new Date().getFullYear()} Anatomics. All rights reserved.</p>
        <div className="m-6 flex space-x-2">
          <img src={GitHubIcon} alt="GitHub" className="h-6 w-6" />
          <a
            href="https://github.com/Goshenko/Anatomics"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline flex items-center"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
