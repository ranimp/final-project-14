import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import CardKategori from "../components/cardKategori";
import Button from "../components/button";
import { Link } from "react-router-dom";

export default function KategoriPage() {
  const [kategori, setKategori] = useState([])

  useEffect(() => {
    axios.get("https://be-cureit.herokuapp.com/kategori")
    .then (res => {
      const fetch = res.data
      setKategori(fetch)
    })
  },[])
  
  return (
    <div className="bg-white">
      <Navbar />
      <div className="container px-5 lg:px-16 mx-auto pt-8 lg:py-12">
        <div data-aos="fade-up" data-aos-duration="1500">
          <h1 className="font-bold font-montserrat text-dark-green text-2xl lg:text-4xl capitalize">Pilih Kategori Masalah</h1>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-black gap-6 my-6 lg:my-12'>
            {kategori.map((kategori) => (
              <CardKategori img={kategori.gambar} title={kategori.judul} desc={kategori.deskripsi} link={`/kategori/${kategori._id}`}/>
            ))}         
          </div>
        </div>
        <div className="mt-36">
          <h1 className="font-bold font-montserrat text-dark-green text-xl lg:text-3xl capitalize text-center">ingin cari tau masalahmu?</h1>
          <Link className="justify-center card-actions mb-32" to="/">
            <Button def="default" type="pilihPaket">Klik disini</Button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}