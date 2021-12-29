import { useState } from 'react';

export default function CardKomWebKat({img, title, desc}) {
  return (
    <>
    <div className='bg-white text-black'>
      <div className='lg:mx-36 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-8 p-5'>
        <div class="card shadow-2xl justify-center">
          <img className="object-cover" src="https://picsum.photos/id/1005/400/250" class="rounded-lg"/>
          <div class="card-body font-poppins -mx-3">
            <h3 class="card-title font-montserrat text-sm -mt-3 capitalize text-center">nama komunitas</h3>
            <p className='text-xs -mb-5 line-clamp-5'>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p> 
            <div className="card-actions justify-end text-orange-500 -my-5">
              <button className="btn btn-ghost">read more</button>
            </div>
          </div>
        </div> 
      </div>
    </div>
    </>
  )
}