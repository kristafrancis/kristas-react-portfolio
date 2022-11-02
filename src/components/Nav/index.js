import React from "react";
//import { capitalizeFirstLetter } from "../../utils/helpers";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";

import { Container } from "react-bootstrap";

function Nav(props) {
  return (
    <header>
      <div>
        <Container>
          <h1 className="d-flex justify-content-evenly">
          <div className="singleCol social-media-icons">
            <a href="https://github.com/kristafrancis">
              <FontAwesomeIcon icon={faSeedling} />
              Krista Francis
            </a>
            <nav>
            <h2>
              <ul className="d-flex">{props.children}</ul>
            </h2>
            </nav>
            </div>
          </h1>
        </Container>
      </div>
    </header>
  );
  //   return (
  //     <header className="flex-row px-1">
  //       <h2>
  //         <a href="https://github.com/kristafrancis">
  //           <FontAwesomeIcon icon={faSeedling} />
  //           Krista Francis
  //         </a>
  //       </h2>
  //       <nav>
  //         <ul className="flex-row px-2">{props.children}</ul>
  //       </nav>
  //     </header>
  //   );
}

export default Nav;
