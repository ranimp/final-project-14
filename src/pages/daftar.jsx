import React, { useState, useEffect } from "react";
import axios from "axios";
import validation from "../components/validation";
import Button from "../components/button";
import ilustrasidaftar from "../images/ilustrasidaftar.png"
import { Link } from "react-router-dom";
import { Redirect } from "react-router";

export default function DaftarPage() {
  const [values, setValues] = useState({
    email: "",
    password: "",
    name: "",
    gender: "",
    phone: "",
    confirmPassword: "",
  });

  const [listUser, setListUser] = useState([])
  const [isLogged, setIsLogged] = useState(false)
  const [isFailed, setIsFailed] = useState(false)
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    listUser.forEach(user => {
      if (user.email === values.email && user.password === values.password && user.email.length >= 1) {
        setIsLogged(true)
        localStorage.setItem("credential", JSON.stringify(user))
        console.log("berhasil")
      } else {
        setIsFailed(true)
        console.log("login gagal")
      }
    setErrors(validation(values));
    })
  }

  useEffect(() => {
    axios.get("https://be-cureit.herokuapp.com/list-users")
      .then(response => response.json())
      .then(data => setListUser(data))
      .catch(err => console.log(err))
  },[listUser, values])
  
  return (
      <div className=" bg-white font-poppins text-black">
        <div className="">
          <div className="grid grid-cols-1 lg:grid-cols-6">            
            <div className="hidden lg:block lg:col-span-3 bg-light-green" data-aos="fade-right" data-aos-duration="1500">
              <div className="">
                <h1 className="text-center text-dark-green lg:mx-40 text-3xl font-bold mt-10">
                  Let's Get Started!
                </h1>
                <img className="hidden mx-auto lg:flex w-9/12 py-12" src={ilustrasidaftar} alt="gambar"/>
              </div>
            </div>
            <div className="col-span-1 lg:col-span-3 my-10 mx-auto" data-aos="fade-left" data-aos-duration="1500">
            <h1 className="text-center text-dark-green lg:mx-40 text-3xl font-bold ">
            Daftar Akun
            </h1>
            {/* form */}
            <form className=" w-full mx-auto my-5">
              {/* name */}
              <div>
                <label className="label text-sm font-bold text-gray-700 block">
                  Nama Lengkap
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
                <label className="label text-sm font-bold text-gray-700 block">
                  Jenis Kelamin
                </label>
                <label className="inline-flex items-center label text-sm font-bold text-gray-700">
                  <input
                    type="radio"
                    className="form-radio"
                    name="gender"
                    value="Male"
                    onChange={handleChange}
                  />
                  <label className="ml-2 text-xs">Male</label>
                </label>
                <label className="inline-flex items-center ml-4 label text-sm font-bold text-gray-700">
                  <input
                    type="radio"
                    className="form-radio"
                    name="gender"
                    value="Female"
                    onChange={handleChange}
                  />
                  <label className="ml-2 text-xs">Female</label>
                </label>
                <div className="text-xs text-red-600	">
                  {errors.gender && (
                    <p className="error">{errors.gender}</p>
                  )}
                </div>
              </div>

              {/* email */}
              <div className="mt-3">
                <label className="label text-sm font-bold text-gray-700 block">
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
                <label className="label text-sm font-bold text-gray-700 block">
                  Email Orang Tua
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

              {/* phone number */}
              <div className="mt-3">
                <label className="label text-sm font-bold text-gray-700 block">
                  Nomor Telepon
                </label>
                <input
                  type="tel"
                  name="telepon"
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
                <label className="label text-sm font-bold text-gray-700 block">
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

              {/* password */}
              <div className="mt-4">
                <label className="label text-sm font-bold text-gray-700 block">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  className=" input text-xs w-full p-2 border border-gray-300 rounded mt-1 hover:border-dark-green bg-transparent"
                  value={values.password}
                  onChange={handleChange}
                  placeholder="Enter Your Password"
                ></input>
                {/* <button onClick={togglePassword}>Show Password</button> */}
                <div className="text-xs text-red-600	">
                  {errors.password && (
                    <p className="error">{errors.password}</p>
                  )}
                </div>
              </div>

              {/* confirm password */}
              <div className="mt-4">
                <label className="label text-sm font-bold text-gray-700 block">
                  Konfirmasi Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  className=" input text-xs w-full p-2 border border-gray-300 rounded mt-1 hover:border-dark-green bg-transparent"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  placeholder="Enter Your Confirm Password"
                ></input>{" "}
                <div className="text-xs text-red-600	">
                  {errors.confirmPassword && (
                    <p className="error">{errors.confirmPassword}</p>
                  )}
                </div>
              </div>

              <div className="my-4 cursor-pointer">
              {/* <div className="p-6 card bordered">
                <div className="form-control">
                  <label className="cursor-pointer label">
                    <span className="label-text">Remember me</span> 
                    <input type="checkbox" checked="" className="checkbox checkbox-accent"/>
                  </label>
                </div>
              </div> */}

                <input className="mr-2 leading-tight checkbox checkbox-sm checkbox-accent" type="checkbox" id="checkbox_id" />
                <span className="text-sm" htmlFor="checkbox_id">
                  Remember Me
                </span>
              </div>

              {/* submit */}
              <div>
                {isFailed && (<div className="text-xs text-red-600 my-3">No Such Data</div>)}
                <Button
                  def="default"
                  type="buyNow"
                  onClick={handleFormSubmit}
                >
                  Login 
                  { isLogged && (<Redirect to="/"/>) }
                </Button>
              </div>
              <div className="text-center my-3">
                <Link to="/login" className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800">Lupa password?</Link>
              </div>
              <div className="text-center lg:flex lg:justify-center my-4">
                <p className="inline-block text-sm text-black-500">
                  Sudah punya akun?
                  <Link
                    className="px-2 inline-block text-sm text-blue-500 hover:text-blue-800"
                    to="/login"
                  >
                    Masuk
                  </Link>
                </p>
              </div>
            </form>
            </div>
          </div>
        </div>
      </div>
    
  );
}