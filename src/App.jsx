import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import { useRef } from "React";
import { MacScrollbar } from "mac-scrollbar";

function App() {
 
  return (
    <div>
      {/* <NavBar /> */}
      <Home />
      <About  />
    </div>
  );
}

export default App;
