import React from "react";

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


export default Footer;
