import { Link } from "react-router-dom"
import { edit } from "../icons"
import profil from "../images/profil.png"

export default function DataKonsultasi() {
  return (
    <div className="bg-light-green font-poppins p-3 lg:p-12 rounded-lg">
      <div className="font-poppins text-black">
        <h1 className="text-dark-green text-center text-xl lg:text-3xl capitalize font-montserrat font-bold">konsultasi yang sedang diikuti </h1>
        <img src={profil} className="w-72 mx-auto my-4"/>
        <p className="capitalize text-xs lg:text-base text-center">konsultasi masalah <span className="text-dark-green font-bold">anxiety</span></p>
        <p className="capitalize text-xs lg:text-base text-center">Dr. Amanda Serena, M.Psi, Psikolog</p>
      </div>
    </div>
  )
}