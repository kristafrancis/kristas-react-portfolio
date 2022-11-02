import { HashRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import "./index";
import "bootstrap/dist/css/bootstrap.min.css";
//import "./index.css";
import React from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";

function App() {
  const pages = [
    {
      pageName: "About",
      pageRoute: "/",
    },
    {
      pageName: "Contact",
      pageRoute: "/contact",
    },
    {
      pageName: "Portfolio",
      pageRoute: "/portfolio",
    },
    {
      pageName: "Resume",
      pageRoute: "/resume",
    },
  ];

  return (
    <div>
      <Router>
        <Nav>
          {pages.map((page) => {
            return (
              <li>
                <NavLink
                  activeclassname="active route-active"
                  className="nav-over"
                  to={page.pageRoute}
                >
                  {page.pageName}
                </NavLink>
              </li>
            );
          })}
        </Nav>
        <main>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
