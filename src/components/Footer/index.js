import React from "react";
import { IconContext } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaStackoverflow } from "react-icons/fa";

function Footer() {
  const icons = [
    {
      name: "FaGithub",
      link: "https://github.com/kristafrancis",
    },

    {
      name: "FaLinkedin",
      link: "https://www.linkedin.com/in/krista-francis721",
    },

    {
      name: "FaStackoverflow",
      link: "https://stackoverflow.com/users/19260280/krista-francis",
    },
  ];

  return (
    <footer className="flex-row px-1">
      {icons.map((icon) => (
        <a
          href={icon.link}
          key={icon.name}
          target="-blank"
          rel="noopener noreferrer"
        >
          <i className={icon.name}></i>
        </a>
      ))}
    </footer>
  );
}
export default Footer;
