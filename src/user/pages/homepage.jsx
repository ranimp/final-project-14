import { Link } from "react-router-dom";
import {komunitas, logo, konsul, praktis, harga, test, workshop, testimoni} from "../icons/"
import { useState, useEffect } from "react";
import axios from "axios";
import jumbotron from "../images/doctor.png"
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Button from "../components/button";
import CardPsikolog from "../components/cardPsikolog";
import CardArtikel from "../components/cardArtikel";
import NavbarLogin from "../components/navbarlogin";

export default function HomePage() {
  const [psikolog, setPsikolog] = useState([])
  const [artikel, setArtikel] = useState([])
  const [user, setUser] = useState()

  useEffect(() => {
    const loggedInUser = localStorage.getItem("credential");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  useEffect(() => {
    axios.get("https://be-cureit.herokuapp.com/psikolog")
    .then (res => {
      const fetch = res.data
      setPsikolog(fetch)
    })
  },[])

  useEffect(() => {
    axios.get("https://be-cureit.herokuapp.com/artikel")
    .then (res => {
      const fetch = res.data
      setArtikel(fetch)
    })
  }, [])

  return (
    <>
      {user ? <NavbarLogin/>:<Navbar/>}
      {/* section 1 */}
      <div className="bg-white pb-8 lg:pb-16">
        <div className="container mx-auto px-5 lg:px-16">
          <div className="flex flex-col-reverse lg:grid grid-cols-1 lg:grid-cols-6">
            <div className="col-span-1 lg:col-span-3 my-8 lg:my-20 font-poppins" data-aos="fade-right" data-aos-duration="1500">
              <h1 className="font-montserrat font-bold text-xl lg:text-5xl text-black lg:mb-2">Konsultasikan</h1>
              <p className="font-montserrat font-bold text-xl lg:text-5xl text-dark-green mb-4 lg:mb-8">Kondisi Mental <span className="text-black">Kamu</span></p>
              <p className="text-sm lg:text-lg font-thin text-black mb-4 lg:mb-8">Kami peduli dengan kesehatan mentalmu, konsultasikan dengan Psikolog terbaik kami untuk belajar dan mencari solusi dari permasalahan kesehatan mental yang kamu alami</p>
              <Link to="/konsultasi">
                <Button def='default' type='pilihPaket'>pilih paket konsultasi </Button>
              </Link>
            </div>
            <div className="lg:flex lg:items-center lg:col-span-3 mx-auto" data-aos="fade-left" data-aos-duration="1000">
              <img src={jumbotron} alt="homepic" />
            </div>
          </div>
        </div>
      </div> 
      {/* section 2 */}
      <div className="bg-light-green">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-6 lg:mx-12">
            <div className="col-span-1 lg:col-span-3 my-8 lg:my-20 font-poppins" data-aos="fade-right" data-aos-duration="1500">
              <h1 className="font-montserrat font-bold text-xl lg:text-5xl text-dark-green mb-4 lg:mb-8">MS Wellbeing Center</h1>
              <p className="text-sm lg:text-lg font-thin text-black mb-4 lg:mb-8">Kami adalah psikolog klinis dan konsultan psikologi pendidikan dengan klinik yang nyaman. Kami berkeja dengan orang tua, guru dan anak dalam ranah perkembangan.</p>
              <img className="mx-auto" src={logo} alt='logo'/>
            </div>
            <div className="lg:col-span-3 lg:mt-20 lg:ml-20" data-aos="fade-left" data-aos-duration="1000">
              <div className="grid grid-cols-12 mb-8">
                <div className="col-span-2">
                  <img className="w-16" src={praktis} alt="praktis" />
                </div>
                <div className="col-span-10 text-black font-poppins ml-4">
                  <p className="text-dark-green capitalize font-montserrat font-bold text-lg lg:text-2xl mb-3">Praktis</p>
                  <p className="text-xs lg:text-base">Karena dilakukan secara online kamu bisa konseling di tempat ternyamanmu dan tidak perlu keluar menuju tempat psikologmu</p>
                </div>
              </div>
              <div className="grid grid-cols-12 mb-8">
                <div className="col-span-2">
                  <img className="w-16" src={konsul} alt="praktis" />
                </div>
                <div className="col-span-10 text-black font-poppins ml-4">
                  <p className="text-dark-green capitalize font-montserrat font-bold text-lg lg:text-2xl mb-3">Efektif</p>
                  <p className="text-xs lg:text-base">Konseling online via telepon/video call sehingga praktis tapi tetap efektif.</p>
                </div>
              </div>
              <div className="grid grid-cols-12 mb-8">
                <div className="col-span-2">
                  <img className="w-16" src={harga} alt="praktis" />
                </div>
                <div className="col-span-10 text-black font-poppins ml-4">
                  <p className="text-dark-green capitalize font-montserrat font-bold text-lg lg:text-2xl mb-3">Praktis</p>
                  <p className="text-xs lg:text-base">2-5x lipat lebih murah dibanding konseling tatap muka.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section 3 */}
      <div className="bg-white py-8 lg:py-12">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-6 lg:mx-12">
            <div className="lg:col-span-3 my-8 lg:my-20" data-aos="fade-right" data-aos-duration="1000">
              <div className="grid grid-cols-2 lg:mb-8 gap-2 lg:gap-6">
                <div className="card justify-center text-black bg-light-green">
                  <img className="w-20 lg:w-32 mx-auto mt-8" src={komunitas} alt='komunitas' />
                  <div className="card-body font-poppins mx-auto">
                    <h3 className="card-title font-montserrat text-sm -mt-9 lg:-mt-14 -mb-4 capitalize text-center">Forum Komunitas</h3>
                    <Link className="card-actions justify-center" to="/komunitas">
                      <Button type='more2'>learn more</Button>
                    </Link>
                  </div>
                </div>
                <div className="card justify-center text-black bg-light-green">
                  <img className="w-14 lg:w-20 mx-auto mt-8" src={test} alt='tes' />
                  <div className="card-body font-poppins mx-auto">
                    <h3 className="card-title font-montserrat text-xs lg:text-sm -mt-8 -mb-4 capitalize text-center">test pendeteksi masalah</h3>
                    <Link to="/deteksi" className="card-actions justify-center">
                      <Button type='more2'>learn more</Button>
                    </Link>
                  </div>
                </div>
                <div className="card justify-center text-black bg-light-green">
                  <img className="w-14 lg:w-20 mx-auto mt-8" src={workshop} alt='ww' />
                  <div className="card-body font-poppins mx-auto">
                    <h3 className="card-title font-montserrat text-xs lg:text-sm -mt-2 -mb-2 lg:-mb-1 capitalize text-center">workshop & webinar</h3>
                    <Link className="card-actions justify-center" to="/webinar">
                      <Button type='more2'>learn more</Button>
                    </Link>
                  </div>
                </div>
                <div className="card justify-center text-black bg-light-green">
                  <img className="w-14 lg:w-20 mx-auto mt-8" src={testimoni} alt='testimoni' />
                  <div className="card-body font-poppins mx-auto">
                    <h3 className="card-title font-montserrat text-xs lg:text-sm -mt-4 -mb-4 capitalize text-center">dengarkan pengalaman pengguna</h3>
                    <Link className="card-actions justify-center" to="/testimoni">
                      <Button type='more2'>learn more</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1 lg:col-span-3 lg:my-auto lg:ml-20 my-auto font-poppins" data-aos="fade-left" data-aos-duration="1500">
              <h1 className="font-montserrat font-bold text-xl lg:text-5xl text-dark-green mb-4 lg:mb-8">Kami menawarkan pelayanan terbaik</h1>
              <p className="text-base lg:text-xl font-thin text-black mb-4 lg:mb-8">Kami menyediakan layanan konsultasi psikologi online yang praktis, efektif, dan biayanya terjangkau. Kami hanya menyediakan produk dengan kualitas terbaik, demi memberikan kenyamanan lebih kepada Anda.</p>
            </div>
          </div>
        </div>
      </div>
      {/* section 4 */}
      <div className="bg-light-green pt-8 lg:py-12">
        <div data-aos="fade-up" data-aos-duration="1500">
          <h1 className="text-center font-bold font-montserrat text-dark-green text-2xl lg:text-4xl capitalize">profil psikolog</h1>
          <div className='lg:mx-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-black'>
            {psikolog.slice(0, 3).map((psikolog) => (
            <div key={psikolog._id}>
              <CardPsikolog  img={psikolog.gambar} title={psikolog.name} desc={psikolog.spesialis} link={`/psikolog/${psikolog._id}`}/>
            </div>
            ))}
          </div>
        </div>
      </div>
      {/* section 5 */}
      <div className="bg-white pt-8 lg:py-16">
        <div data-aos="fade-up" data-aos-duration="1500">
          <h1 className="container mx-auto px-5 lg:px-16 font-bold font-montserrat text-dark-green text-2xl lg:text-4xl capitalize">artikel menarik untuk kamu</h1>
          <div className='lg:mx-16 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 p-5 text-black'>
            {artikel.slice(0, 4).map((artikel) => (
              <CardArtikel key={artikel._id} img={artikel.gambar} title={artikel.judul} desc={artikel.deskripsi} link={`/artikel/${artikel._id}`}/>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
