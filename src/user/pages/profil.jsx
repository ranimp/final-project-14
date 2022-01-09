import { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../components/footer";
import Button from "../components/button";
import { useHistory } from "react-router-dom";
import ProfilData from "../components/dataProfil";
import profil from "../images/profil.png"
import DataKonsultasi from "../components/dataKonsultasi";
import NavbarLogin from "../components/navbarlogin";

export default function ProfilPage() {  
  const [user, setUser] = useState()
  const history = useHistory()

  useEffect(() => {
    const loggedInUser = localStorage.getItem("credential");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    } else {
      history.push('/login')
    }
  }, []);

  return (
    <div>
    {user &&
      <div className="bg-white">
        <NavbarLogin />
        <div className="container mx-auto px-4 my-12">
          <div className="grid grid-cols-12 text-dark-green px-4">
            <div className="col-span-3 lg:col-span-2">
              <img src={profil} className="rounded-full"/>
            </div>
            <div className="col-span-9 lg:col-span-10 flex items-center ml-2 lg:ml-8">
              <h1 className="text-xl lg:text-3xl inline-block font-montserrat font-bold ml-4">Budi Santoso</h1>
            </div>
          </div>
          <div className="my-12">
            <ProfilData />
          </div>
          <div>
            <DataKonsultasi />
          </div>
        </div>
        <Footer />
      </div>}
    </div>
  )
}
