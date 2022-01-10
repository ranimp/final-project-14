import React from "react";
import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
// components
import Sidebar from '../components/Sidebar/Sidebar';
import Navbar from '../components/Navbars/Navbar';
import CardLineChart from '../components/Cards/CardLineChart';
import HeaderStats from '../components/Headers/HeaderStats';
import CardBarChart from "../components/Cards/CardBarChart";
import Footer from "../components/Footers/Footer";

export default function Dashboard() {
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
  
  return (
    <>
    {admin && <div>
      <Sidebar />
      <div className="relative md:ml-64 bg-gray-300">
      <Navbar/>
      <HeaderStats/>
        <div className="flex flex-wrap mt-5">
          <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
            <CardLineChart />
          </div>
          <div className="w-full xl:w-4/12 px-4">
            <CardBarChart />
          </div>
          <Footer/>
        </div>
        </div>
    </div>}
    </>
  );
}
