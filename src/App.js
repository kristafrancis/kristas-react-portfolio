import React, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Footer from "./components/Footer"
import ContactForm from "./components/Contact";

function App() {
  const [categories] = useState([
    {
      name: "about me" },
    { name: "projects" },
    { name: "contact" },
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
    </div>
  );
}

export default App;
