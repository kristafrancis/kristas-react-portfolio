//import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import React, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
//import Portfolio from "./components/Portfolio";
import ContactForm from "./components/Contact";
import Footer from "./components/Footer";
//import Resume from "./components/Resume";
//import Footer from "./components/Footer";

function App() {
  const [categories] = useState([
    // {
    //   name: "about me",
    // },
    { name: "portfolio" },
    // { name: "contact" },
    { name: "resume" },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
