import { useState } from 'react';
import { Link } from "react-router-dom";

export default function CardArtikel({img, title, desc}) {
  return (
    <>
      <div className="card lg:card-side card-bordered bg-light-green border-light-green">
        <img className="object-scale-down w-48 mx-auto p-5" src={img}/>
        <div className="card-body -my-3 lg:-ml-8 font-poppins">
          <h2 className="card-title line-clamp-1 text-base text-dark-green font-montserrat">{title}</h2> 
          <p className='-mb-5 line-clamp-3 text-sm'>{desc}</p> 
          <div className="card-actions justify-end text-orange-500 -mb-2">
            <button className="btn btn-ghost">read more</button>
          </div>
        </div>
      </div>
    </>
  )
}