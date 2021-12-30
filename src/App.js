import HomePage from "./pages/homepage";
import AOS from "aos";
import "aos/dist/aos.css";
import Save from "./pages/save";
import KonsultasiPage from "./pages/konsultasi";
import { BrowserRouter, Route , Switch} from "react-router-dom";
import PsikologPage from "./pages/profilPsikolog";
AOS.init();

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/konsultasi" component={KonsultasiPage} />
            <Route exact path="/profil-psikolog" component={PsikologPage} />
            <Route exact path="/" component={HomePage} />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
