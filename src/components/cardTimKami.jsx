import { useState } from 'react';

export default function CardTim({img, title, position, desc}) {
  return (
    <>
      <div className="card text-center shadow-2xl justify-center">
        <img className="object-cover" src="https://picsum.photos/id/1005/400/250" className="rounded-lg"/>
        <div className="card-body font-poppins">
          <h3 className="card-title font-montserrat text-sm -mt-3 capitalize">nama kita semua</h3>
          <p className='text-xs -mt-3 mb-4'>Founder</p> 
          <p className='text-xs'>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p> 
        </div>
      </div> 
    </>
  )
}