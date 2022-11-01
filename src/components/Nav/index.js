import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          Krista Francis
        </a>
      </h2>
      <nav>
        <ul className="flex-row">{props.children}</ul>
      </nav>
    </header>
  );
}

export default Nav;
