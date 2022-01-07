import { BrowserRouter, Route , Switch} from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import HomePage from "./pages/homepage";
import KonsultasiPage from "./pages/konsultasi";
import DetailPsikologPage from "./pages/detailPsikolog";
import PsikologPage from "./pages/psikolog";
import ArtikelPage from "./pages/artikel";
import DetailArtikelPage from "./pages/detailArtikel";
import WebinarPage from "./pages/webinar";
import DetailWebinarPage from "./pages/detailWebinar";
import KategoriPage from "./pages/kategori";
import DetailKategoriPage from "./pages/detailKategori";
import KomunitasPage from "./pages/komunitas";
import DetailKomunitasPage from "./pages/detailKomunitas";
import DetailTestimoniPage from "./pages/testimoni";
import LoginPage from "./pages/login";
import DaftarPage from "./pages/daftar";
import AboutPage from "./pages/about";
import PenjadwalanPage from "./pages/penjadwalan";
import ProfilPage from "./pages/profil";
AOS.init();

export default function UserRoutes() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/testimoni/:id" component={DetailTestimoniPage} />
            <Route exact path="/komunitas/:id" component={DetailKomunitasPage} />
            <Route exact path="/kategori/:id" component={DetailKategoriPage} />
            <Route exact path="/webinar/:id" component={DetailWebinarPage} />
            <Route exact path="/artikel/:id" component={DetailArtikelPage} />
            <Route exact path="/psikolog/:id" component={DetailPsikologPage} />
            <Route exact path="/testimoni/" component={DetailTestimoniPage} />
            <Route exact path="/komunitas" component={KomunitasPage} />
            <Route exact path="/konsultasi" component={KonsultasiPage} />
            <Route exact path="/artikel" component={ArtikelPage} />
            <Route exact path="/webinar" component={WebinarPage} />
            <Route exact path="/kategori" component={KategoriPage} />
            <Route exact path="/jadwal-konsultasi" component={PenjadwalanPage} />
            <Route exact path="/psikolog" component={PsikologPage} />
            <Route exact path="/profil" component={ProfilPage} />
            <Route exact path="/tentang" component={AboutPage} />
            <Route exact path="/daftar" component={DaftarPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/" component={HomePage} />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

