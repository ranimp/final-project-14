import React, { useState, useEffect } from "react";
import { Link, useHistory, Redirect } from "react-router-dom";
import axios from "axios";
import Button from "../components/button";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import SoalDeteksi from "../components/soalDeteksi";
import validation from "../components/validation";

export default function DeteksiPage() {
  const [values, setValues] = useState({
    question : [],
    score: 0
  });
  const [user, setUser] = useState()
  const history = useHistory()

  const [soal, setSoal] = useState([])

  useEffect(() => {
  axios.get("https://be-cureit.herokuapp.com/deteksi/61dff7485d99ffac2d01779e")
    .then (res => {
      const fetch = res.data
      const listSoal = fetch.questions
      setSoal(listSoal)
    })
  },[values])

  useEffect(() => {
    const loggedInUser = localStorage.getItem("credential");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    } else {
      history.push('/login')
    }
  }, []);

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    if(values.question.length) {
      values.question.forEach((question, index, arr) => {
        if(question.id === event.target.name){
          console.log('ini ssama');
          arr[index] = {
            id : event.target.name,
            score: event.target.value
          }
        } else if (question.id !== event.target.name) {
          values.question.push({
            id : event.target.name,
            score: event.target.value
          })
          console.log('ini tertriggerrr');
        }
          console.log(question.id, event.target.name);
          // console.log(typeOf(question));
        })
      } else {
        values.question.push({
          id : event.target.name,
          score: event.target.value
        })
      }
    // values.score += Number(event.target.value)
    console.log(values);
  };
  
  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(values);
    const loggedInUser = localStorage.getItem("credential")
    const logged = JSON.parse(loggedInUser);
    const {token, id, role} = logged.data
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
    const reducer = (previousValue, currentValue) => previousValue + currentValue;
    const totalScore = values.reduce(reducer)
    console.log(totalScore);
    // score.push(values)
    // if (role === 'user') {
    //   axios.post(`https://be-cureit.herokuapp.com/deteksi/add-deteksi`, {
    //     user : id,
    //     totalScore : totalScore
    //   }, config)
    //   .then(response => {
    //     console.log(response,"Sukses menjadwalkan")
    //     history.push('/hasil-deteksi')
    //   })
    //   .catch(err => console.log(err.response.data.msg))
    // } else {
    //   history.push('/403')
    // }
    setErrors(validation(values));
  }
  return (
    <div className="bg-white">
      <Navbar />
      <div className="container mx-auto px-5 my-12 text-black font-poppins">
        <div className="lg:mb-8 mb-4">
          <h1 className="lg:text-4xl text-xl text-dark-green font-montserrat font-bold capitalize">Tes Level Stress</h1>
          <p className="text-sm lg:text-base mt-2">Tes ini berguna untuk mendeteksi tingkat stress kamu dan akan membantu kami untuk menentukan konsultasi mana yang terbaik untuk kamu.</p>
        </div>
        <div>
          {soal.map((soal) => (
            <SoalDeteksi key={soal.question} name={soal._id} soal={soal.question} onChange={handleChange}/>
          ))}
        </div>
        <div className="flex justify-end mt-8">
          <Button def='default' type='kirimDeteksi' onClick={handleFormSubmit}>Kirim</Button>
        </div>
      </div>
      <Footer />
    </div>
  )
}