import NavBar from "./sections/NavBar";
import Home from "./sections/Home";
import About from "./sections/About";
import Resume from "./sections/Resume";
import Experience from "./sections/Experience";
import Socials from "./sections/Socials";

import { useRef } from "react";
import { MacScrollbar } from "mac-scrollbar";

function App() {
  return (
    <div>
      <Home />
      <About />
      <Experience />
      <Resume />
      <Socials />
    </div>
  );
}

export default App;