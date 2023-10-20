import { useState } from "react";
import "./App.css";
import About from "./components/about/About";
import Contacts from "./components/contacts/Contacts";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode && "dark"}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contacts />
    </div>
  );
}

export default App;
