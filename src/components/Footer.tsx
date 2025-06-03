import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiWakatime } from "react-icons/si";

const Footer: React.FC = () => {
  return (
    <footer className="  py-8">
      <div className="flex justify-center space-x-6 mb-4">
        <a
          href="https://github.com/cherryyeti"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-gray-600"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/jason-javandel-b35348262/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-gray-600"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://wakatime.com/@CherryYeti"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-gray-600"
        >
          <SiWakatime />
        </a>
      </div>
      <h1>Made with ❤️ by Jason Javandel</h1>
    </footer>
  );
};

export default Footer;
