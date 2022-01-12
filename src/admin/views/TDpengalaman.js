import { Link } from "react-router-dom";
import Navbar from '../components/Navbars/Navbar';
import Footer from "../components/Footers/Footer";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import React from "react";
import success from "../components/assets/img/success.gif";


export default function TDpengalaman() {
    const [admin, setAdmin] = useState(false)
    const history = useHistory()
    const [showModal, setShowModal] = React.useState(false);

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

    const [values, setValues] = useState({
      judul: "",
      deskripsi: "",
      video: "",
      problema: "",
    });
  
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const loggedInUser = localStorage.getItem("credential")
    const logged = JSON.parse(loggedInUser);
    const foundUser = logged.data.role
    const token = logged.data.token
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
    if (foundUser === 'admin') {
      axios.post("https://be-cureit.herokuapp.com/pengalaman/add-pengalaman", {
        judul : values.judul,
        deskripsi : values.deskripsi,
        video: values.video,
        problema: values.problema
      }, config)
      .then(response => {
        console.log(response,"Sukses menambahkan")
        history.push("/admin/pengalamanuser")
      })
      .catch(err => console.log(err))
    } else {
      history.push('/403')
    }
  }

    return(
<>
{admin && <div>
    <Navbar/>
    <div className="flex justify-center items-center w-full bg-dark-green">
    <div className="w-1/2 bg-white rounded shadow-2xl p-8 m-4">
        <h1 className=" block w-full text-center  text-dark-green capitalize text-2xl mb-6">Tambah Data</h1>
        <form action="/" method="post">
            <div className="flex flex-col mb-4">
                <label className="text-left mb-2 font-bold text-lg text-black" for="first_name">Judul</label>
                <input className="border py-2 px-3 text-black " type="text" name="first_name" id="first_name"
                name="judul" 
                value={values.judul}
                onChange={handleChange}
                />
            </div>
            <div className="flex flex-col mb-4">
                <label className="text-left mb-2 font-bold text-lg text-black" for="last_name">Deskripsi</label>
                <input className="border py-2 px-3 text-black " type="text" name="last_name" id="last_name"
                name="deskripsi" 
                value={values.deskripsi}
                onChange={handleChange}
                />
            </div>
            <div className="flex flex-col mb-4">
                <label className="text-left mb-2 font-bold text-lg text-black" for="email">Video</label>
                <input className="border py-2 px-3 text-black " type="email" name="email" id="email"
                name="video" 
                value={values.video}
                onChange={handleChange}
                />
            </div>
            <div className="flex flex-col mb-4">
                <label className="text-left mb-2 font-bold text-lg text-black" for="email">Problema</label>
                <input className="border py-2 px-3 text-black " type="email" name="email" id="email"
                name="problema" 
                value={values.problema}
                onChange={handleChange}
                />
            </div>
            
            <Link
            type="button"
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-white bg-dark-green" onClick={() => setShowModal(true)}>
            Tambah Data
          </Link>
          {showModal && (
            <>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <h5 className="ml-10 text-dark-green text-xl font-normal">
                    Data berhasil ditambahkan!
                    </h5>
                    <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModal(false)}
                    >
                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                        </span>
                    </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                    <img className="mx-auto w-48"src={success} alt="success"></img>
                    </div>
                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                        <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={handleFormSubmit} 
                    >
                        Tutup
                    </button>
                    </div>
                </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
        )}
        </form>
    </div>
</div>
    <Footer/>
    </div>}
</>
    );
}