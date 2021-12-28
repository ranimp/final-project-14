import { useState } from 'react';
import { Link } from "react-router-dom";

export default function CardTestimoniPsikolog() {
  return (
    <>
    <div className='bg-white text-black'>
      <div className='lg:mx-36 grid grid-cols-1 md:grid-cols-2 p-5'>
        <div className="card card-side">
          <img className="rounded-full object-cover lg:p-5 w-20 h-20" src="https://picsum.photos/id/1005/400/250"/>
          <div className="card-body -my-3 lg:-ml-8 font-poppins">
            <h2 className="card-title line-clamp-1 text-sm text-dark-green font-montserrat -mt-3 lg:-mt-0">Horizontal</h2> 
            <p className='-mb-5 text-xs'>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p> 
          </div>
        </div>
      </div>
    </div>
    </>
  )
}