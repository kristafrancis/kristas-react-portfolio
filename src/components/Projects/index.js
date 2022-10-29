import React, { useState } from "react";
import Portfolio from "../Portfolio";

function Projects() {
  const [portfolio] = useState([
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
      name: "E-Commerce-Back-End",
      languages: "Express.js, MySQL, Sequelize, CRUD Method",
      repository: "https://github.com/kristafrancis/e-commerce-back-end",
      link: "https://github.com/kristafrancis/e-commerce-back-end",
    },
    {
      name: "Social-Network-API",
      languages: "Express.js, MongoDB",
      repository: "https://github.com/kristafrancis/social-network-API",
      link: "https://github.com/kristafrancis/social-network-API",
    },
    {
      name: "Weather-Dashboard",
      languages: "HTML, CSS, Javascript, Open Weather API",
      repository: "https://github.com/kristafrancis/weather-dashboard",
      link: "https://github.com/kristafrancis/weather-dashboard",
    },
    {
      name: "MVC-Tech-Blog",
      languages: "HTML, CSS, Javascript, Handlebars",
      repository: "https://github.com/kristafrancis/mvc-tech-blog",
      link: "https://krista-mvc-tech-blog.herokuapp.com/",
    },
  ]);
}
