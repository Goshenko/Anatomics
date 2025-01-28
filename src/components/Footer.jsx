import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-2">
      <div className="flex flex-col md:flex-row justify-between items-center text-xs">
        <p>
          &copy; {new Date().getFullYear()} Anatomics. All rights reserved.
        </p>
        <div className="m-6 flex space-x-2">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Facebook
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Twitter
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
