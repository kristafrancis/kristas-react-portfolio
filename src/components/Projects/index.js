import React, { useState } from "react";
import Stack from "react-bootstrap/Stack";
import Portfolio from "../Portfolio";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Projects = () => {
  const [currentPortfolio] = useState([
    {
      name: "Run-Buddy",
      languages: "HTML, CSS",
      repository: "https://github.com/kristafrancis/run-buddy",
      link: "https://lernantino.github.io/run-buddy/#what-we-do",
    },
    {
      name: "Now-We're-Cookin'",
      languages: "HTML, CSS, Javascript",
      repository: "https://github.com/kristafrancis/now-were-cookin",
      link: "https://kristafrancis.github.io/now-were-cookin/",
    },
    {
      name: "Password-Generator",
      languages: "HTML, CSS, Javascript",
      repository: "https://github.com/kristafrancis/password-generator",
      link: "https://github.com/kristafrancis/password-generator",
    },
    {
      name: "Between-the-Looking-Glass",
      languages: "Express.js, MongoDB",
      repository: "https://github.com/kristafrancis/social-network-API",
      link: "https://dry-temple-13792.herokuapp.com/",
    },
    {
      name: "Weather-Dashboard",
      languages: "HTML, CSS, Javascript, Node.js, Express.js, Handlebars",
      repository: "https://github.com/kristafrancis/between-the-looking-glass",
      link: "https://github.com/kristafrancis/weather-dashboard",
    },
    {
      name: "MVC-Tech-Blog",
      languages: "HTML, CSS, Javascript, Handlebars",
      repository: "https://github.com/kristafrancis/mvc-tech-blog",
      link: "https://krista-mvc-tech-blog.herokuapp.com/",
    },
  ]);

  return (
    <div>
      <div className="d-flex justify-content-between flex-wrap">
        {currentPortfolio.map((image, i) => {
          return (
            <div className="">
              <img
                src={require(`../../assets/portfolio/${image.name}.png`)}
                alt={image.name}
                className="img-thumbnail col-md-4"
                key={image.name}
              />
              <Stack gap={2} className="col-sm-3 mx-auto">
                <div>
                  <button variant="secondary">
                    GitHub
                    <a href={image.repository}>
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                  </button>
                </div>
                <div className="bg-dark border">
                  <a href={image.link}>
                    <FontAwesomeIcon icon={faLink} />
                  </a>
                </div>
              </Stack>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Projects;
