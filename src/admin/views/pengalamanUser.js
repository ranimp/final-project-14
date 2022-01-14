import React from "react";

// components
import Sidebar from '../components/Sidebar/Sidebar';
import Navbar from '../components/Navbars/Navbar';
import HeaderStats from '../components/Headers/HeaderStats';
import { Link } from "react-router-dom";
import Footer from "../components/Footers/Footer";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";

export default function PengalamanUser() {
  const [testimoni, setTestimoni] = useState([])
  const [admin, setAdmin] = useState(false)
  const history = useHistory()

  useEffect(() => {
    const loggedInUser = localStorage.getItem("credential");
    if (loggedInUser) {
      const logged = JSON.parse(loggedInUser);
      const foundUser = logged.data.role
      if (foundUser === 'admin') {
        setAdmin(true);
      } else if (foundUser === 'user') {
        history.push('/403')
      }
    } else {
      history.push('/login')
    }
  }, []);

useEffect(() => {
  axios.get(`https://be-cureit.herokuapp.com/pengalaman`)
  .then (res => {
    const fetch = res.data
    setTestimoni(fetch)
  })
},[])
  return (

    <>
    {admin && <div>
    <Sidebar />
    <div className="relative md:ml-64 bg-gray-300">
    <Navbar/>
    <HeaderStats/>
    <div className="sm :w-4/12 flex flex-col my-10 mx-10">
      <div className="sm :w-4/12 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="sm :w-4/12 py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className=" sm :w-4/12 shadow overflow-hidden border-b border-gray-200">
            <table className=" min-w-full divide-y divide-gray-200">
              <thead className=" bg-gray-50">
                <tr>
                <th>
                  <span className="hidden sm:block">
          <Link
            type="button"
            className="my-2 ml-2 inline-flex items-center px-2 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-white bg-dark-green"
            to="/admin/tambahdatapengalaman">
            < span className="fas fa-plus -ml-1 mr-2 h-5 w-4 text-white" aria-hidden="true" />
            Tambah Data
          </Link>
        </span>
                  </th>
                <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-dark-green uppercase tracking-wider"
                  >
                    ID
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-dark-green uppercase tracking-wider"
                  >
                   Judul
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-dark-green uppercase tracking-wider"
                  >
                    Deskripsi
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-dark-green uppercase tracking-wider"
                  >
                    Video
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-dark-green uppercase tracking-wider"
                  >
                    Problema
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
              {testimoni.map((testimoni)=>
              (
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold text-black">
                    
                    </span>
                  </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold text-black">
                    {testimoni._id}
                    </span>
                  </td>
                  <td className="w-3/4 col-span-3 mt-8">
                      <p className="line-clamp-3 my-2 text-black text-xs whitespace-pre-line align-bottom">
                      {testimoni.judul}
                      </p>
                    </td>
                    <td className="w-3/4 col-span-3 mt-8">
                      <p className="line-clamp-3 my-2 text-black text-xs whitespace-pre-line align-bottom">
                      {testimoni.deskripsi}
                      </p>
                    </td>
                    <td className="w-3/4 col-span-3 mt-8">
                      <p className="mx-2 line-clamp-3 my-2 text-black text-xs whitespace-pre-line align-bottom">
                      {testimoni.video}
                      </p>
                    </td>
                    <td className="w-3/4 col-span-3 mt-8">
                      <p className="line-clamp-3 my-2 text-black text-xs whitespace-pre-line align-bottom">
                      {testimoni.problema}
                      </p>
                    </td>
                  </tr>
                 ) )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
      </div>
      </div>}
    </>
  );
}
