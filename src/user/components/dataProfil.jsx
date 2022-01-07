import { Link } from "react-router-dom"
import { edit } from "../icons"

export default function ProfilData() {
  return (
    <div className="bg-light-green font-poppins p-3 lg:p-12 rounded-lg">
      <div className="mb-8">
        <Link to="/">
          <img src={edit} className="w-6 float-right" />
        </Link>
        <h1 className="text-dark-green text-xl lg:text-3xl capitalize font-montserrat font-bold">profil saya</h1>
      </div>
      <div className="grid grid-cols-6 text-black">
        <div className="col-span-3 lg:col-span-1 capitalize text-xs lg:text-base">
          <p>Nama lengkap</p>
        </div>
        <div className="col-span-3 lg:col-span-5 text-xs lg:text-base">
          <p>: Nama lengkap</p>
        </div>
        <div className="col-span-3 lg:col-span-1 capitalize text-xs lg:text-base">
          <p>Tanggal lahir</p>
        </div>
        <div className="col-span-3 lg:col-span-5 text-xs lg:text-base">
          <p>: Tanggal lahir</p>
        </div>
        <div className="col-span-3 lg:col-span-1 capitalize text-xs lg:text-base">
          <p>Pekerjaan</p>
        </div>
        <div className="col-span-3 lg:col-span-5 text-xs lg:text-base">
          <p>: Pekerjaan</p>
        </div>
        <div className="col-span-3 lg:col-span-1 capitalize text-xs lg:text-base">
          <p>Nomor telepon</p>
        </div>
        <div className="col-span-3 lg:col-span-5 text-xs lg:text-base">
          <p>: Nomor telepon</p>
        </div>
        <div className="col-span-3 lg:col-span-1 capitalize text-xs lg:text-base">
          <p>Email</p>
        </div>
        <div className="col-span-3 lg:col-span-5 text-xs lg:text-base">
          <p>: Email</p>
        </div>
        <div className="col-span-3 lg:col-span-1 capitalize text-xs lg:text-base">
          <p>Email Orang Tua</p>
        </div>
        <div className="col-span-3 lg:col-span-5 text-xs lg:text-base">
          <p>: Email Orang Tua</p>
        </div>
      </div>
    </div>
  )
}