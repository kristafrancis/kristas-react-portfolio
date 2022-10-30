import React from "react";
//import { IconContext } from "react-icons/fa";
//import { FaGithub, FaLinkedin, FaStackoverflow } from "react-icons/fa";
import {
  faGithub,
  faLinkedin,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Container } from "react-bootstrap";

const Footer = () => (
  <div className="footer">
    <Container>
      <h3 className="text-center">
        <div className="singleCol social-media-icons d-flex justify-content-evenly">
          <a href="https://github.com/kristafrancis">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
        <div className="singleCol social-media-icons d-flex justify-content-evenly">
          <a href="https://www.linkedin.com/in/krista-francis721">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <div className="singleCol social-media-icons d-flex justify-content-evenly">
          <a href="https://stackoverflow.com/users/19260280/krista-francis">
            <FontAwesomeIcon icon={faStackOverflow} />
          </a>
        </div>
      </h3>
    </Container>
  </div>
);

//function Footer() {
//const icons = [
//{
//name: "FaGithub",
//link: "https://github.com/kristafrancis",
//},

//{
// name: "FaLinkedin",
// link: "https://www.linkedin.com/in/krista-francis721",
//},

// {
// name: "FaStackoverflow",
//link: "https://stackoverflow.com/users/19260280/krista-francis",
// },
// ];

// return (
// <footer className="flex-row px-1">
//  {icons.map((icon) => (
//   <a
//     href={icon.link}
//     key={icon.name}
//    target="-blank"
//    rel="noopener noreferrer"
//   >
//    <i className={icon.name}></i>
//   </a>
// ))}
// </footer>
//);
//}
export default Footer;
