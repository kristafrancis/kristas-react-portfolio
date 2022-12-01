import React from "react";
import coverImage from "../../assets/headshot.png";

function About() {
  return (
    <section className="my-5">
      <h1 id="about">About Me</h1>
      <img
        src={coverImage}
        className="rounded-pill"
        style={{ width: "10%", borderRadius: "200px" }}
        alt="cover"
      />
      <div className="my-2">
        <p>
          I am a recent graduate from University of Central Florida's Full Stack
          Web Development Bootcamp. I have become proficient in Front-End
          Development (HTML, CSS, Javascript, Web API's, Third-Party API's,
          Server-Side API's), Back-End Development (Node.js, OOP, Express.js,
          SQL, Sequelize, ORM, MVC Paradigm), Performance-Based Development
          (NoSQL, MongoDB, Progressive Web Applications, React, MERN and State)
          and we use GitHub and Heroku to save and deploy. I am also learning
          .Net on my own. I really enjoy learning the in's and out's of Web
          Development, I can't wait to utilize the new skills I've learned at a
          job. I am hard-working, resourceful and I love learning about new
          technologies.
        </p>
      </div>
    </section>
  );
}

export default About;
