import React from "react";
//import { capitalizeFirstLetter } from "../../utils/helpers";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";

import { Container } from "react-bootstrap";

function Nav(props) {
  return (
    <header>
      {/* <div> */}
      <Container>
        <div>
          <h1>
            <div className="d-flex justify-content-left">
              <a href="https://github.com/kristafrancis">
                <FontAwesomeIcon icon={faSeedling} />
                Krista Francis
              </a>
            </div>
            {/* <nav> */}
            <h2 className="d-flex justify-content-right">
              <ul className="d-flex">{props.children}</ul>
            </h2>
            {/* </nav> */}
          </h1>
        </div>
      </Container>
      {/* </div> */}
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
