import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects"
import Technologies from "./components/Technologies";
import Socials from "./components/Socials";

import { useRef } from "react";
import { MacScrollbar } from "mac-scrollbar";

function App() {
  return (
    <div>
      <Home />
      <About />
      <Technologies />
      <Projects />
      <Resume />
      <Socials />
    </div>
  );
}

export default App;
