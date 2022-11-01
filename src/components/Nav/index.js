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
          <h1 className="text-left justify-content-space-between">
            <a href="https://github.com/kristafrancis">
              <FontAwesomeIcon icon={faSeedling} />
              Krista Francis
            </a>
          </h1>
        </Container>
      </div>
      <nav>
        <h3>
          <ul className="flex-row px-2">{props.children}</ul>
        </h3>
      </nav>
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
