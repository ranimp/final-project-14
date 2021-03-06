import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useParams } from "react-router-dom";
import CardArtikel from "../components/cardArtikel";
import NavbarLogin from "../components/navbarlogin";

export default function DetailArtikelPage() {
  const [artikel, setArtikel] = useState([])
  const [rekArtikel, setRekArtikel] = useState([])
  const [user, setUser] = useState()

  useEffect(() => {
    const loggedInUser = localStorage.getItem("credential");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  useEffect(() => {
    axios.get(`https://be-cureit.herokuapp.com/artikel/${id}`)
    .then (res => {
      const fetch = res.data
      setArtikel(fetch)
    })
  },[artikel])

  useEffect(() => {
    axios.get("https://be-cureit.herokuapp.com/artikel")
    .then (res => {
      const fetch = res.data
      setRekArtikel(fetch)
    })
  },[])
  
  let {id} = useParams()

  return (
    <div className="bg-white">
      {user ? <NavbarLogin/> : <Navbar />}
      <div className="container mt-8 lg:mt-16 px-5 lg:px-16 mb-12 mx-auto text-black">
        <h1 className="font-montserrat text-center font-bold text-dark-green text-2xl lg:text-4xl capitalize mb-5 lg:mb-12">{artikel.judul}</h1>
        <img className="mx-auto mb-5" src={artikel.gambar} alt="gambar"/>
        <div className="grid grid-cols-1 lg:grid-cols-5 lg:mx-12">
          <div className="col-span-3 lg:mt-8" data-aos="fade-right" data-aos-duration="1000">
            <div className="font-poppins text-xs lg:text-sm whitespace-pre-line align-bottom">
            {artikel.deskripsi}
            </div>
          </div>
          <div className="col-span-2 my-8 lg:my-8 font-poppins lg:ml-8" data-aos="fade-left" data-aos-duration="1500">
            <div className="bg-dark-green p-3 w-full text-white capitalize mb-3">
              rekomendasi artikel untuk kamu
            </div>
              {rekArtikel.slice(0,3).map((artikel) => (
                <div className="my-3">
                <CardArtikel key={artikel._id} img={artikel.gambar} title={artikel.judul} desc={artikel.deskripsi} link={`/artikel/${artikel._id}`}/>
                </div> 
              ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}