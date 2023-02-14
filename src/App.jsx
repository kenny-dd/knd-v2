import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import { useRef } from "React";
import { MacScrollbar } from "mac-scrollbar";

function App() {
  return (
    <div>
      <Home />
      <About />
      <Resume />
    </div>
  );
}

export default App;
