import { Link } from "react-router-dom";
import Navbar from '../components/Navbars/Navbar';
import Footer from "../components/Footers/Footer";
import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import React from "react";
import success from "../components/assets/img/success.gif";

export default function EDartikel() {
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
      gambar : ""
    });
  
    const [errors, setErrors] = useState({});
    const [updated, setUpdated] = useState(false)
    
  
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
      const {token, id, role, judul, deskripsi, gambar} = logged.data
      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };
      if (role === 'admin') {
        axios.patch(`https://be-cureit.herokuapp.com/edit-artikel/${id}`, {
          judul: values.judul || judul,
          deskripsi: values.deskripsi || deskripsi,
          gambar: values.gambar || gambar
        }, config)
        .then(response => {
          console.log(response,"Sukses mengupdate")
          history.push('/admin/artikel')
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
        <h1 className=" block w-full text-center  text-dark-green capitalize text-2xl mb-6">Edit Data</h1>
        <form action="/" method="patch">
            <div className="flex flex-col mb-4">
                <label className="text-left mb-2 font-bold text-lg text-black" for="first_name">Judul</label>
                <input className="border py-2 px-3 text-grey-800" type="text" name="first_name" id="first_name"
                value={values.judul}
                onChange={handleChange}
                />
                 <div className="text-xs text-red-600">
          {errors.judul && <p className="error">{errors.judul}</p>}
        </div>
            </div>
            <div className="flex flex-col mb-4">
                <label className="text-left mb-2 font-bold text-lg text-black" for="last_name">Deskripsi</label>
                <input className="border py-2 px-3 text-grey-800" type="text" name="last_name" id="last_name"
                value={values.deskripsi}
                onChange={handleChange}
                />
                 <div className="text-xs text-red-600">
          {errors.deskripsi && <p className="error">{errors.deskripsi}</p>}
        </div>
            </div>
            <div className="flex flex-col mb-4">
                <label className="text-left mb-2 font-bold text-lg text-black" for="File">Gambar</label>
                <input className="border py-2 px-3 text-grey-800" type="file" name="file" id="file"
                value={values.gambar}
                onChange={handleChange}
                />
            </div>
            
            <Link
            type="button"
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-white bg-dark-green" onClick={() => setShowModal(true)}>
            Simpan Data
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