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
import NotFound from './user/pages/404notfound';
import Forbidden from './user/pages/403forbidden';
import EditProfilPage from './user/pages/editProfil';
import EditPasswordPage from './user/pages/editPassword';
import DeteksiPage from './user/pages/deteksi';
import EDuser from './admin/views/EDuser';
import EDartikel from './admin/views/EDartikel';
import EDpembayaran from './admin/views/EDpembayaran';
import EDkontak from './admin/views/EDkontak';
import EDjadwal from './admin/views/EDjadwal';
import EDkategori from './admin/views/EDkategori';
import EDkomunitas from './admin/views/EDkomunitas';
import EDpengalaman from './admin/views/EDpengalaman';
import EDpsikolog from './admin/views/EDpsikolog';
import EDtest from './admin/views/EDtest';
import EDtestimoni from './admin/views/EDtestimoni';
import EDtim from './admin/views/EDtim';
import EDwebinar from './admin/views/EDwebinar';
AOS.init();

export default function UserRoutes() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/403" component={Forbidden} />
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
            <Route exact path="/deteksi" component={DeteksiPage} />
            <Route exact path="/webinar" component={WebinarPage} />
            <Route exact path="/kategori" component={KategoriPage} />
            <Route exact path="/jadwal-konsultasi" component={PenjadwalanPage} />
            <Route exact path="/psikolog" component={PsikologPage} />
            <Route exact path="/edit-profil" component={EditProfilPage} />
            <Route exact path="/ganti-password" component={EditPasswordPage} />
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
            <Route exact path="*" component={NotFound} />
            <Route exact path="/admin/editdatauser" component={EDuser} />
            <Route exact path="/admin/editdataartikel" component={EDartikel} />
            <Route exact path="/admin/editdatapembayaran" component={EDpembayaran} />
            <Route exact path="/admin/editdatakontak" component={EDkontak} />
            <Route exact path="/admin/editdatajadwal" component={EDjadwal} />
            <Route exact path="/admin/editdatakategori" component={EDkategori} />
            <Route exact path="/admin/editdatakomunitas" component={EDkomunitas} />
            <Route exact path="/admin/editdatapengalaman" component={EDpengalaman} />
            <Route exact path="/admin/editdatapsikolog" component={EDpsikolog} />
            <Route exact path="/admin/editdatatest" component={EDtest} />
            <Route exact path="/admin/editdatatestimoni" component={EDtestimoni} />
            <Route exact path="/admin/editdatatim" component={EDtim} />
            <Route exact path="/admin/editdatawebinar" component={EDwebinar} />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

