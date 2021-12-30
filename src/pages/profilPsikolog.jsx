import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import CardPaket from "../components/cardPaket";
import Button from "../components/button";
import CardTestimoniPsikolog from "../components/cardTesti";

export default function PsikologPage() {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="container mt-16 px-5 lg:px-16 mb-12 text-black">
        <h1 className="font-montserrat font-bold text-dark-green text-2xl lg:text-4xl capitalize mb-4">profil psikolog</h1>
        <p className="font-poppins text-sm lg:text-base">Ramah, Profesional, dan non-judgemental </p>
        <div className="grid grid-cols-1 lg:grid-cols-5 lg:mx-12">
          <div className="col-span-1 lg:col-span-2 my-8 lg:my-20 font-poppins" data-aos="fade-right" data-aos-duration="1500">
            <img className="mx-auto" src="https://picsum.photos/id/1005/400/250" alt="gambar"/>
          </div>
          <div className="lg:col-span-3 lg:mt-20 lg:ml-20" data-aos="fade-left" data-aos-duration="1000">
            <div className="font-montserrat font-bold text-lg lg:text-2xl text-dark-green">
              Dr. Amanda Serena, M.psi
            </div>
            <div className="font-montserrat font-bold text-sm lg:text-base my-3">
            Spesialisas di Stress & Anxiety, Relationship, dan Gangguan Kepribadian
            </div>
            <div className="font-poppins text-xs lg:text-sm">
            Dr. Amanda Serena, M.psi memiliki ketertarikan dalam bidang emosi, kecemasan, depresi, serta stres. Amanda juga memiliki pengalaman menangani kasus yang berkaitan dengan masalah dalam hubungan romantis, masalah dalam support system ataupun stres kehidupan sehari-hari. Sylvia akan berkolaborasi denganmu untuk menghadapi permasalahan yang dialami, sehingga kualitas hidupmu dapat meningkat.
            </div>
            <div className="my-3">
              <Button type='pilihPaket' def='default'>jadwalkan konsultasi</Button>
            </div>
          </div>
        </div>
        <div className="font-poppins text-sm lg:text-base text-center font-bold mt-5">Testimoni  Konsultasi  Untuk Dr. Amanda Sarena, M.psi</div>
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