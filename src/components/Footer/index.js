import React from "react";

function Footer() {
  const icons = [
    {
      name: "fab fa-github",
      link: "https://github.com/kristafrancis",
    },

    {
      name: "fab fa-linkedin",
      link: "https://www.linkedin.com/in/krista-francis721",
    },

    {
      name: "fab fa-stack-overflow",
      link: "https://stackoverflow.com/users/19260280/krista-francis",
    },
  ];

  return (
    <footer className="flex-row px-1">
      {icons.map((icon) => (
        <a
          href={icon.link}
          key={icon.name}
          target="-blank"
          rel="noopener noreferrer"
        >
          <i className={icon.name}></i>
        </a>
      ))}
    </footer>
  );
}
