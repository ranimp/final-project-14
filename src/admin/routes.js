import "../App.css"
import '../index.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ProfilPsikolog from "./views/profilPsikolog";
import ProfilUser from "./views/profilUser"
import Artikel from './views/Artikel';
import Webinar from './views/Webinar';
import Komunitas from "./views/Komunitas";
import TestPendeteksiMasalah from './views/Test';
import JadwalKonsultasi from './views/jadwalKonsul';
import DataPembayaran from './views/dataPembayaran';
import HubungiKami from './views/hubungiKami';
import Testimoni from './views/Testimoni';
import PengalamanUser from './views/pengalamanUser';
import KategoriMasalah from './views/KategoriMasalah';
import TimKami from './views/Timkami';
import TDuser from './views/TD_user';
import TDwebinar from './views/TDwebinar';
import TDpsikolog from './views/TDpsikolog';
import TDkomunitas from './views/TDkomunitas';
import TDartikel from './views/TDartikel';
import TDtest from './views/TDtest';
import TDjadwal from './views/TDjadwal';
import TDpembayaran from './views/TDpembayaran';
import TDkontak from './views/TDkontak';
import TDtestimoni from './views/TDtestimoni';
import TDpengalaman from './views/TDpengalaman';
import TDkategori from './views/TDkategori';
import TDtim from './views/TDtim';
function Routes() {
  return (
    <div>
      <BrowserRouter>
      <div className="Routes">
        <Switch>
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
    </div>
  );
}

export default Routes;
