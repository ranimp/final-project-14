import validation from "./validation";
import Button from "./button";
import { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function EditPassword() {
  const [values, setValues] = useState({
    password:""
  });

  
  const [passwordShown, setPasswordShown] = useState(false);
  const [errors, setErrors] = useState({});
  const history = useHistory()

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
  }

  return (
  <div className="bg-light-green font-poppins p-3 lg:p-12 rounded-lg">
    <div className="mb-8">
      <h1 className="text-dark-green text-xl lg:text-3xl capitalize font-montserrat font-bold">Edit Profil</h1>
    </div>
    <form className="w-full mx-auto my-5 text-black">
      <div className="mt-4">
        <label className="label text-sm font-bold text-gray-700 block">
          Password Baru
        </label>
        <input
          type={passwordShown ? "text" : "password"} 
          name="password"
          className=" input text-xs w-full p-2 border border-gray-300 rounded mt-1 hover:border-dark-green bg-transparent"
          value={values.password}
          onChange={handleChange}
          placeholder="Enter Your New Password"
        ></input>
        <input
          className="mt-2"
          type="checkbox"
          id="pw"
          onClick={() => setPasswordShown(prevState => !prevState)}
        />
        <label className="text-xs ml-2" for='pw'>Lihat password</label>
        {/* <input type='checkbox' onclick={togglePassword}>Show Password</input> */}
        <div className="text-xs text-red-600	">
          {errors.password && (
            <p className="error">{errors.password}</p>
          )}
        </div>
      </div>

      {/* submit */}
      <div className="mt-3 lg:mt-5">
        <Button
          def="default"
          type="buyNow"
          onClick={handleFormSubmit}
        >
          Simpan
        </Button>
      </div>
      
    </form>
  </div>
  )
}