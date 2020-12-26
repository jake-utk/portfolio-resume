import React, { useState } from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import AboutMe from "./Components/AboutMe/AboutMe";
import Resume from "./Components/Resume/Resume";
import Contact from "./Components/Contact/Contact";
import BurgerMenu from "./Components/BurgerMenu/BurgerMenu";
import Projects from "./Components/Projects/Projects";
import { Route } from "react-router-dom";
import Hero from "./Components/Hero/Hero";

function App() {
  const [menuOpenState, setMenuOpenState] = useState(false);
  const [image, setImage] = useState();

  return (
    <div className="App">
      <div id="outer-container">
        <BurgerMenu
          isOpen={menuOpenState}
          setIsOpen={setMenuOpenState}
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
        />
        <Hero />
        <div className="main">
          {/* <Route path='/' image={image} component={Home} /> */}
          <Route path="/aboutme" component={AboutMe} />
          <Route path="/projects" componeont={Projects} />
          <Route path="/resume" component={Resume} />
          <Route path="/contact" component={Contact} />
        </div>
        <Home image={image} />
        <AboutMe />
        <Projects setImage={setImage} />
        <Resume />
        <Contact />
      </div>
      <footer>
        Developed by{" "}
        <a href="https://github.com/jake-utk" target="_blank" rel="noreferrer">
          Jake Addis
        </a>{" "}
        (©2020) using{" "}
        <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
          React
        </a>
        . Please hire me!
      </footer>
    </div>
  );
}

export default App;
