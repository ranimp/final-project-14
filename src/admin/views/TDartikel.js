import { Link, useHistory } from "react-router-dom";
import Navbar from '../components/Navbars/Navbar';
import Footer from "../components/Footers/Footer";
import axios from "axios";
import { useState, useEffect } from "react";

export default function TDartikel() {
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
 
  const [values, setValues] = useState({
      judul: "",
      deskripsi: "",
      gambar: "",
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
      axios.post("https://be-cureit.herokuapp.com/artikel/add-artikel", {
        judul : values.judul,
        deskripsi : values.deskripsi,
        gambar: values.gambar
      }, config)
      .then(response => {
        console.log(response,"Sukses menambahkan")
        history.push("/admin/artikel")
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
                <label className="text-left mb-2 font-bold text-lg text-gray-900" for="first_name">Judul</label>
                <input className="border py-2 px-3 text-grey-800" type="text" id="first_name"
                name="judul" 
                value={values.judul}
                onChange={handleChange}/>
            </div>
            <div class="flex flex-col mb-4">
                <label className="text-left mb-2 font-bold text-lg text-gray-900">Deskripsi</label>

                <textarea rows="5" id="message" class="w-full 
                px-3 py-2 border text-grey-800" required
                name="deskripsi" 
                value={values.deskripsi}
                onChange={handleChange}></textarea>
            </div>
            <div className="flex flex-col mb-4">
                <label className="text-left mb-2 font-bold text-lg text-gray-900" for="File">Gambar</label>
                <input className="border py-2 px-3 text-grey-800" type="file" id="file"
                name="gambar"
                value={values.gambar}
                onChange={handleChange}/>
            </div>
            <Link
            type="button"
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-white bg-dark-green"
            onClick={handleFormSubmit}>
            Tambah Data
          </Link>
        </form>
    </div>
</div>
    <Footer/>
    </div>}
</>
    );
}