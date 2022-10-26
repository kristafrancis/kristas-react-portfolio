import React from "react";

function Resume() {
  return (
    <section className="my-5">
      <div className="my-2">
        <p>
          Download my <a href="www.github.com/kristafrancis">resume</a>
        </p>
        <h3>Front-End Proficiencies</h3>
        <ul className="skills">
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>jQuery</li>
          <li>Responsive Design</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
        <h3>Back-End Proficiencies</h3>
        <ul className="skills">
          <li>API's</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>My SQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>RESTful APLI's</li>
          <li>CRUD Method</li>
          <li>GraphQL</li>
        </ul>
      </div>
    </section>
  );
}

export default Resume;
