import HomePage from "./pages/homepage";
import AOS from "aos";
import "aos/dist/aos.css";
import Save from "./pages/save";
AOS.init();

function App() {
  return (
    <> 
      <HomePage/>
    </>
  );
}

export default App;
