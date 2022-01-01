import { useState } from 'react';
import { Link } from "react-router-dom";
import Button from './button';

export default function CardKategori({img, title, link}) {
  return (
    <div className='bg-white'>
      <div class="card shadow-2xl justify-center">
        <div className='flex flex-col items-center'>
          <img className="w-40 h-40 mx-auto p-5" src={img}/>
        </div>
        <div class="card-body font-poppins -mx-3">
          <h3 class="card-title font-montserrat text-base -mt-8 -mb-4 capitalize text-center line-clamp-2">{title}</h3>
          <Link className="justify-center card-actions" to={link}>
            <Button type='more'>learn more</Button>
          </Link>
        </div>
      </div> 
    </div>
  )
}