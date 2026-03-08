import React from "react";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="void-footer">
      <div className="footer-brand">
        designed & built by <strong>isaí céspedes</strong>
      </div>
      <div className="footer-year">© {year}</div>
      <ul className="footer-socials">
        <li>
          <a href="https://github.com/Lordkaito" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <AiFillGithub />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/Lordkaito_" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <AiOutlineTwitter />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/isaicespedes/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
