import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import CardArtikel from "../components/cardArtikel";

export default function ArtikelPage() {
  const [artikel, setArtikel] = useState([])

  useEffect(() => {
    axios.get("https://be-cureit.herokuapp.com/artikel")
    .then (res => {
      const fetch = res.data
      setArtikel(fetch)
    })
  },[])
  
  return (
    <div className="bg-white">
      <Navbar />
      <div className=" pt-8 lg:py-12">
        <div data-aos="fade-up" data-aos-duration="1500">
          <h1 className="text-center font-bold font-montserrat text-dark-green text-2xl lg:text-4xl capitalize">artikel menarik untuk kamu</h1>
          <div className='lg:mx-36 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 p-5 text-black lg:my-8'>
            {artikel.map((artikel) => (
              <CardArtikel img={artikel.gambar} title={artikel.judul} desc={artikel.deskripsi} link={`/artikel/${artikel._id}`}/>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}