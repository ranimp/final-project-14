import HomePage from "./pages/homepage";
import AOS from "aos";
import "aos/dist/aos.css";
import Save from "./pages/save";
import KonsultasiPage from "./pages/konsultasi";
import { BrowserRouter, Route , Switch} from "react-router-dom";
import DetailPsikologPage from "./pages/detailPsikolog";
import PsikologPage from "./pages/psikolog";
import ArtikelPage from "./pages/artikel";
import DetailArtikelPage from "./pages/detailArtikel";
AOS.init();

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/artikel/:id" component={DetailArtikelPage} />
            <Route exact path="/psikolog/:id" component={DetailPsikologPage} />
            <Route exact path="/konsultasi" component={KonsultasiPage} />
            <Route exact path="/artikel" component={ArtikelPage} />
            <Route exact path="/psikolog" component={PsikologPage} />
            <Route exact path="/" component={HomePage} />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
