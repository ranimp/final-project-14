import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import CardPaket from "../components/cardPaket";
import Button from "../components/button";
import CardTestimoniPsikolog from "../components/cardTesti";
import { useParams } from "react-router-dom";

export default function DetailPsikologPage() {
  const [psikolog, setPsikolog] = useState([])

  useEffect(() => {
    axios.get(`https://be-cureit.herokuapp.com/psikolog/${id}`)
    .then (res => {
      const fetch = res.data
      setPsikolog(fetch)
    })
  },[psikolog])
  let {id} = useParams()

  return (
    <div className="bg-white">
      <Navbar />
      <div className="container mt-16 px-5 lg:px-16 mb-12 mx-auto text-black">
        <h1 className="font-montserrat font-bold text-dark-green text-2xl lg:text-4xl capitalize mb-4">profil psikolog</h1>
        <p className="font-poppins text-sm lg:text-base">Ramah, Profesional, dan non-judgemental </p>
        <div className="grid grid-cols-1 lg:grid-cols-5 lg:mx-12">
          <div className="col-span-1 lg:col-span-2 my-8 lg:my-20 font-poppins" data-aos="fade-right" data-aos-duration="1500">
            <img className="mx-auto w-80 h-80 object-scale-down" src={psikolog.gambar} alt="gambar"/>
          </div>
          <div className="lg:col-span-3 lg:my-auto lg:ml-20" data-aos="fade-left" data-aos-duration="1000">
            <div className="font-montserrat font-bold text-lg lg:text-2xl text-dark-green">
              {psikolog.name}
            </div>
            <div className="font-montserrat font-bold text-sm lg:text-base my-3">
            {psikolog.spesialis}
            </div>
            <div className="font-poppins text-xs lg:text-sm">
            {psikolog.deskripsi}
            </div>
            <div className="my-8">
              <Button type='pilihPaket' def='default'>jadwalkan konsultasi</Button>
            </div>
          </div>
        </div>
        <div className="font-poppins text-sm lg:text-base text-center font-bold mt-5">Testimoni  Konsultasi Untuk {psikolog.name}</div>
        <div className='lg:mx-36 grid grid-cols-1 md:grid-cols-2 p-5 shadow-2xl rounded-xl'>
          <CardTestimoniPsikolog />
          <CardTestimoniPsikolog />
          <CardTestimoniPsikolog />
          <CardTestimoniPsikolog />
        </div>
        <div className="mx-auto flex justify-center my-16">
          <div className="btn-group ">
            <button className="btn btn-xs bg-white text-black border-dark-green">«</button> 
            <button className="btn btn-xs bg-white text-black border-dark-green">1</button> 
            <button className="btn btn-xs bg-white text-black border-dark-green btn-active">2</button> 
            <button className="btn btn-xs bg-white text-black border-dark-green">3</button> 
            <button className="btn btn-xs bg-white text-black border-dark-green">4</button> 
            <button className="btn btn-xs bg-white text-black border-dark-green">...</button> 
            <button className="btn btn-xs bg-white text-black border-dark-green">9</button> 
            <button className="btn btn-xs bg-white text-black border-dark-green">10</button> 
            <button className="btn btn-xs bg-white text-black border-dark-green">»</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}