import { useState } from 'react';

export default function CardDokumentasi({img, title, desc}) {
  return (
    <>
      <div className="card justify-center">
        <div>
          <img className="w-40 h-40 object-cover" src={img} className="rounded-lg"/>
        </div>
        <div className="card-body font-poppins -mx-3">
          <h3 className="card-title font-montserrat text-sm -mt-3 capitalize text-center">{title}</h3>
          <p className='text-xs -mb-5 line-clamp-5'>{desc}</p> 
        </div>
      </div> 
    </>
  )
}