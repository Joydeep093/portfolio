import React, { useContext } from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Contacts from "./components/contacts/Contacts";
import Footer from "./components/footer/Footer";
import { ThemeContext } from "./components/context/theme-context";
import "./App.css";
import Experience from "./components/experience/Experience";

const App = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div className={`${theme}`}>
        <Header />
        <Nav />
        <About />
        <Skills />
        <Experience />
        <Contacts theme={theme}/>
        <Footer />
      </div>
    </>
  );
};

export default App;
