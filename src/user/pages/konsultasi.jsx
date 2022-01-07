import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import CardPaket from "../components/cardPaket";

export default function KonsultasiPage() {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="container mx-auto mt-16 px-5 mb-12">
        <h1 className="font-montserrat font-bold text-dark-green text-2xl lg:text-4xl capitalize text-center mb-4">konseling online</h1>
        <p className="font-poppins text-sm lg:text-base text-black text-center">Efektif  karena bisa bicara langsung dengan konselor melalui chat/video call. </p>
        <p className="font-poppins text-sm lg:text-base text-black text-center">Nyaman dengan harga terjangkau</p>
        <div className='lg:mx-36 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-8 p-5 text-black'>
          <CardPaket />
        </div>
      </div>
      <Footer />
    </div>
  )
}