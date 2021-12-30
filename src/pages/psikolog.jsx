import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import CardPsikolog from "../components/cardPsikolog";

export default function PsikologPage() {
  const [psikolog, setPsikolog] = useState([])

  useEffect(() => {
    axios.get("https://be-cureit.herokuapp.com/psikolog")
    .then (res => {
      const fetch = res.data
      setPsikolog(fetch)
    })
  },[])
  
  return (
    <div className="bg-white">
      <Navbar />
      <div className=" pt-8 lg:py-12">
        <div data-aos="fade-up" data-aos-duration="1500">
          <h1 className="text-center font-bold font-montserrat text-dark-green text-2xl lg:text-4xl capitalize">profil psikolog</h1>
          <div className='lg:mx-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-black'>
            {psikolog.map((psikolog) => (
              <CardPsikolog img={psikolog.gambar} title={psikolog.name} desc={psikolog.spesialis} link={`/psikolog/${psikolog._id}`}/>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}