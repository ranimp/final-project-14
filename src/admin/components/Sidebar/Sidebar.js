/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";


import UserDropdown from "../Dropdowns/UserDropdown"

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-light-green flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <i className="fas fa-bars"></i>
          </button>
          {/* Brand */}
          <Link
            className="md:block text-left md:pb-2 text-dark-green mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
            to="/admin"
          >
            Ms Wellbeing Center
          </Link>
          {/* User */}
          <ul className="md:block lg:hidden items-center flex flex-wrap list-none">
            {/* <li className="inline-block relative">
              <NotificationDropdown />
            </li> */}
            <li className="inline-block relative">
            <Link className="text-center mt-2" to="/login">
                    <button
                      className="bg-dark-green text-white font-poppins active:bg-dark-green text-sm font-bold uppercase px-4 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="button"
                    >
                      Masuk
                    </button>
                  </Link>
            </li>
            <li className="inline-block relative">
              <UserDropdown />
            </li>
          </ul>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
              <div className="flex flex-wrap">

                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
            <li className="inline-flex">
                <Link
                  className="text-blueGray-700 hover:text-dark-green text-xs  py-3 font-bold block"
                  to="/admin"
                >
                  <i className="fas fa-newspaper text-blueGray-400 mr-2 text-sm"></i>{" "}
                  Dashboard
                </Link>
              </li>
            {/* Heading */}
            <h6 className="md:min-w-full text-dark-green text-xs  font-bold block pt-1 pb-4 no-underline">
              Halaman Profil
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="inline-flex">
                <Link
                  className="text-blueGray-700 hover:text-dark-green text-xs  py-3 font-bold block"
                  to="/admin/profiluser"
                >
                  <i className="fas fa-user-circle text-blueGray-400 mr-2 text-sm"></i>{" "}
                  Profil Pengguna
                </Link>
              </li>

              <li className="inline-flex">
                <Link
                  className="text-blueGray-700 hover:text-dark-green text-xs  py-3 font-bold block"
                  to="/admin/profilpsikolog"
                >
                  <i className="fas fa-user-circle text-blueGray-400 mr-2 text-sm"></i>{" "}
                  Profil Psikolog
                </Link>
              </li>
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-dark-green text-xs  font-bold block pt-1 pb-4 no-underline">
              Documentation
            </h6>
            {/* Navigation */}
            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <Link className="inline-flex text-blueGray-700 hover:text-dark-green text-sm block mb-4 no-underline font-semibold" to="/admin/webinar">
                  <i className="fas fa-chalkboard-teacher mr-2 text-blueGray-300 text-base"></i>
                  Webinar
              </Link>
              <Link className="inline-flex text-blueGray-700 hover:text-dark-green text-sm block mb-4 no-underline font-semibold" to="/admin/komunitas">
                  <i className="fas fa-users mr-2 text-blueGray-300 text-base"></i>
                  Komunitas
                
              </Link>

              <Link className="inline-flex text-blueGray-700 hover:text-dark-green text-sm block mb-4 no-underline font-semibold" to="/admin/artikel">
                
                  <i className="fas fa-book-reader mr-2 text-blueGray-300 text-base"></i>
                  Artikel
              </Link>

              <Link className="inline-flex text-blueGray-700 hover:text-dark-green text-sm block mb-4 no-underline font-semibold" to="/admin/test">
                  <i className="fas fa-diagnoses mr-2 text-blueGray-300 text-base"></i>
                  Test Pendeteksi Masalah
              </Link>

              <Link className="inline-flex text-blueGray-700 hover:text-dark-green text-sm block mb-4 no-underline font-semibold" to="/admin/jadwalkonsultasi">
                  <i className="fas fa-clipboard-list mr-2 text-blueGray-300 text-base"></i>
                  Jadwal Konsultasi
              </Link>

              <Link className="inline-flex text-blueGray-700 hover:text-dark-green text-sm block mb-4 no-underline font-semibold" to="/admin/datapembayaran">
                
                  <i className="fas fa-database mr-2 text-blueGray-300 text-base"></i>
                  Data Pembayaran
               
              </Link>

              <Link className="inline-flex text-blueGray-700 hover:text-dark-green text-sm block mb-4 no-underline font-semibold" to="/admin/hubungikami">
                  <i className="fas fa-phone-volume mr-2 text-blueGray-300 text-base"></i>
                  Hubungi Kami
                
              </Link>

              <Link className="inline-flex text-blueGray-700 hover:text-dark-green text-sm block mb-4 no-underline font-semibold" to="/admin/testimoni">
                  <i className="fas fa-address-card mr-2 text-blueGray-300 text-base"></i>
                  Testimoni 
              </Link>

              <Link className="inline-flex text-blueGray-700 hover:text-dark-green text-sm block mb-4 no-underline font-semibold" to="/admin/pengalamanuser">
                  <i className="fas fa-house-user mr-2 text-blueGray-300 text-base"></i>
                  Pengalaman Pengguna
              </Link>
              <Link className="inline-flex text-blueGray-700 hover:text-dark-green text-sm block mb-4 no-underline font-semibold" to="/admin/kategorimasalah">
                  <i className="fas fa-clipboard-list mr-2 text-blueGray-300 text-base"></i>
                  Kategori Masalah
              </Link>
              <Link className="inline-flex text-blueGray-700 hover:text-dark-green text-sm block mb-4 no-underline font-semibold" to="/admin/timkami">
                  <i className="fas fa-users mr-2 text-blueGray-300 text-base"></i>
                  Tim Kami
                
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
