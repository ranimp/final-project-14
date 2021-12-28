import CardArtikel from "./components/cardArtikel";
import CardPsikolog from "./components/cardPsikolog";
import CardTim from "./components/cardTimKami";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import NavbarLogin from "./components/navbarlogin";

function App() {
  return (
    <> 
      <Navbar/> 
      <CardPsikolog/>
      <CardArtikel/>
      <CardTim/>
      <Footer/>
    </>
  );
}

export default App;
