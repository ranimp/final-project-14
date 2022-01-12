import { Link } from "react-router-dom";
import Navbar from '../components/Navbars/Navbar';
import Footer from "../components/Footers/Footer";
import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

export default function EDtestimoni() {
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


    return(
<>
{admin && <div>
    <Navbar/>
    <div className="flex justify-center items-center w-full bg-dark-green">
    <div className="w-1/2 bg-white rounded shadow-2xl p-8 m-4">
        <h1 className=" block w-full text-center  text-dark-green capitalize text-2xl mb-6">Edit Data</h1>
        <form action="/" method="post">
            <div className="flex flex-col mb-4">
                <label className="text-left mb-2 font-bold text-lg text-black" for="first_name">Judul</label>
                <input className="border py-2 px-3 text-grey-800" type="text" name="first_name" id="first_name"/>
            </div>
            <div class="flex flex-col mb-4">
                        <label className="text-left mb-2 font-bold text-lg text-black">Deskripsi</label>

                        <textarea rows="5" name="message" id="message" class="w-full px-3 py-2 border text-grey-800" required></textarea>
            </div>
            <div className="flex flex-col mb-4">
                <label className="text-left mb-2 font-bold text-lg text-black" for="File">Gambar</label>
                <input className="border py-2 px-3 text-grey-800" type="file" name="file" id="file"/>
            </div>
            <Link
            type="button"
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-white bg-dark-green">
            Simpan
          </Link>
        </form>
    </div>
</div>
    <Footer/>
    </div>}
</>
    );
}