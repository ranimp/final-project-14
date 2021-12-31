import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import CardKomWebKat from "../components/cardKomWebKat";

export default function WebinarPage() {
  const [webinar, setWebinar] = useState([])

  useEffect(() => {
    axios.get("https://be-cureit.herokuapp.com/webinar")
    .then (res => {
      const fetch = res.data
      setWebinar(fetch)
    })
  },[])
  
  return (
    <div className="bg-white">
      <Navbar />
      <div className=" pt-8 lg:py-12">
        <div data-aos="fade-up" data-aos-duration="1500">
          <h1 className="text-center font-bold font-montserrat text-dark-green text-2xl lg:text-4xl capitalize">Webinar dan Workshop</h1>
          <div className='lg:mx-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-black gap-6 px-5 my-6 lg:my-12'>
              {webinar.map((webinar) => (
                <CardKomWebKat img={webinar.gambar} title={webinar.judul} desc={webinar.deskripsi} link={`/webinar/${webinar._id}`}/>
              ))}           
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}