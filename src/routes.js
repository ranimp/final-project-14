import './index.css';
import { BrowserRouter, Route , Switch} from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import HomePage from "./user/pages/homepage";
import KonsultasiPage from "./user/pages/konsultasi";
import DetailPsikologPage from "./user/pages/detailPsikolog";
import PsikologPage from "./user/pages/psikolog";
import ArtikelPage from "./user/pages/artikel";
import DetailArtikelPage from "./user/pages/detailArtikel";
import WebinarPage from "./user/pages/webinar";
import DetailWebinarPage from "./user/pages/detailWebinar";
import KategoriPage from "./user/pages/kategori";
import DetailKategoriPage from "./user/pages/detailKategori";
import KomunitasPage from "./user/pages/komunitas";
import DetailKomunitasPage from "./user/pages/detailKomunitas";
import DetailTestimoniPage from "./user/pages/testimoni";
import LoginPage from "./user/pages/login";
import DaftarPage from "./user/pages/daftar";
import AboutPage from "./user/pages/about";
import PenjadwalanPage from "./user/pages/penjadwalan";
import ProfilPage from "./user/pages/profil";
import Dashboard from "./admin/views/Dashboard";
import ProfilPsikolog from "./admin/views/profilPsikolog";
import ProfilUser from "./admin/views/profilUser"
import Artikel from './admin/views/Artikel';
import Webinar from './admin/views/Webinar';
import Komunitas from "./admin/views/Komunitas";
import TestPendeteksiMasalah from './admin/views/Test';
import JadwalKonsultasi from './admin/views/jadwalKonsul';
import DataPembayaran from './admin/views/dataPembayaran';
import HubungiKami from './admin/views/hubungiKami';
import Testimoni from './admin/views/Testimoni';
import PengalamanUser from './admin/views/pengalamanUser';
import KategoriMasalah from './admin/views/KategoriMasalah';
import TimKami from './admin/views/Timkami';
import TDuser from './admin/views/TD_user';
import TDwebinar from './admin/views/TDwebinar';
import TDpsikolog from './admin/views/TDpsikolog';
import TDkomunitas from './admin/views/TDkomunitas';
import TDartikel from './admin/views/TDartikel';
import TDtest from './admin/views/TDtest';
import TDjadwal from './admin/views/TDjadwal';
import TDpembayaran from './admin/views/TDpembayaran';
import TDkontak from './admin/views/TDkontak';
import TDtestimoni from './admin/views/TDtestimoni';
import TDpengalaman from './admin/views/TDpengalaman';
import TDkategori from './admin/views/TDkategori';
import TDtim from './admin/views/TDtim';
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
            <Route exact path="/admin" component={Dashboard} />
            <Route exact path="/admin/profiluser" component={ProfilUser} />
            <Route exact path="/admin/profilpsikolog" component={ProfilPsikolog} />
            <Route exact path="/admin/artikel" component={Artikel} />
            <Route exact path="/admin/webinar" component={Webinar} />
            <Route exact path="/admin/komunitas" component={Komunitas} />
            <Route exact path="/admin/test" component={TestPendeteksiMasalah} />
            <Route exact path="/admin/jadwalkonsultasi" component={JadwalKonsultasi} />
            <Route exact path="/admin/datapembayaran" component={DataPembayaran} />
            <Route exact path="/admin/hubungikami" component={HubungiKami} />
            <Route exact path="/admin/testimoni" component={Testimoni} />
            <Route exact path="/admin/pengalamanuser" component={PengalamanUser} />
            <Route exact path="/admin/kategorimasalah" component={KategoriMasalah} />
            <Route exact path="/admin/timkami" component={TimKami} />
            <Route exact path="/admin/tambahdatauser" component={TDuser} />
            <Route exact path="/admin/tambahdatawebinar" component={TDwebinar} />
            <Route exact path="/admin/tambahdatapsikolog" component={TDpsikolog} />
            <Route exact path="/admin/tambahdatakomunitas" component={TDkomunitas} />
            <Route exact path="/admin/tambahdataartikel" component={TDartikel} />
            <Route exact path="/admin/tambahdatatest" component={TDtest} />
            <Route exact path="/admin/tambahdatajadwal" component={TDjadwal} />
            <Route exact path="/admin/tambahdatapembayaran" component={TDpembayaran} />
            <Route exact path="/admin/tambahdatakontakkami" component={TDkontak} />
            <Route exact path="/admin/tambahdatatestimoni" component={TDtestimoni} />
            <Route exact path="/admin/tambahdatapengalaman" component={TDpengalaman} />
            <Route exact path="/admin/tambahdatakategori" component={TDkategori} />
            <Route exact path="/admin/tambahdatatimkami" component={TDtim} />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}
