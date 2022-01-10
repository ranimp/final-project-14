import validation from "./validation";
import Button from "./button";
import { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function EditProfil() {
  const [values, setValues] = useState({
    phone: "",
    name: "",
    gender: "",
    email: "",
    email_ortu: "",
    date: "",
    password: "",
    confirmPassword: "",
    member : "not member",
    role: "user"
  });

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
      {/* name */}
      <div>
        <label className="label text-sm font-bold text-black block">
          Nama
        </label>
        <input
          type="text"
          name="name"
          className="input text-xs w-full p-2 border border-gray-300 rounded mt-1 hover:border-dark-green bg-transparent"
          value={values.name}
          onChange={handleChange}
          placeholder="Enter Your Name"
        ></input>
        <div className="text-xs text-red-600	">
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
      </div>

      {/* gender */}
      <div className="mt-4">
        <label className="label text-sm font-bold text-black block">
          Jenis Kelamin
        </label>
        <label className="inline-flex items-center label text-sm font-bold text-black">
          <input
            type="radio"
            className="form-radio"
            name="gender"
            value="Male"
            onChange={handleChange}
          />
          <label className="ml-2 text-xs">Laki-laki</label>
        </label>
        <label className="inline-flex items-center ml-4 label text-sm font-bold text-black">
          <input
            type="radio"
            className="form-radio"
            name="gender"
            value="Female"
            onChange={handleChange}
          />
          <label className="ml-2 text-xs">Perempuan</label>
        </label>
        <div className="text-xs text-red-600	">
          {errors.gender && (
            <p className="error">{errors.gender}</p>
          )}
        </div>
      </div>

      {/* email */}
      <div className="mt-3">
        <label className="label text-sm font-bold text-black block">
          Email
        </label>
        <input
          type="email"
          name="email"
          className="input text-xs w-full p-2 border border-gray-300 rounded mt-1 hover:border-dark-green bg-transparent"
          value={values.email}
          onChange={handleChange}
          placeholder="Enter Your Email"
        ></input>
        <div className="text-xs text-red-600">
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
      </div>

      {/* email */}
      <div className="mt-3">
        <label className="label text-sm font-bold text-black block">
          Email Orang Tua
        </label>
        <input
          type="email"
          name="email_ortu"
          className="input text-xs w-full p-2 border border-gray-300 rounded mt-1 hover:border-dark-green bg-transparent"
          value={values.email_ortu}
          onChange={handleChange}
          placeholder="Enter Your Email"
        ></input>
        <div className="text-xs text-red-600">
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
      </div>

      {/* phone number */}
      <div className="mt-3">
        <label className="label text-sm font-bold text-black block">
          Nomor Telepon
        </label>
        <input
          type="text"
          name="phone"
          className="input text-xs w-full p-2 border border-gray-300 rounded mt-1 hover:border-dark-green bg-transparent"
          value={values.phone}
          onChange={handleChange}
          placeholder="08xxxxxxxxxx"
        ></input>
        <div className="text-xs text-red-600">
          {errors.phone && <p className="error">{errors.phone}</p>}
        </div>
      </div>

      {/* birthdate */}
      <div className="mt-3">
        <label className="label text-sm font-bold text-black block">
          Tanggal Lahir
        </label>
        <input
          type="date"
          name="date"
          className="input text-xs w-full p-2 border border-gray-300 rounded mt-1 hover:border-dark-green bg-transparent"
          value={values.date}
          onChange={handleChange}
          placeholder="08xxxxxxxxxx"
        ></input>
        <div className="text-xs text-red-600">
          {errors.date && <p className="error">{errors.date}</p>}
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