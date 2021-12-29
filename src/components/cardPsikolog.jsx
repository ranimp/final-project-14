import { useState } from 'react';
import Logo from '../icons/logo.png';
import { Link } from "react-router-dom";
import Button from './button';

export default function CardPsikolog({img, title, desc}) {
  return (
    <>
      <div className="card text-center">
        <div className='flex flex-col items-center pt-10'>
          <img className="rounded-full object-cover w-48 h-48" src="https://picsum.photos/id/1005/400/250" />
        </div>
        <div className="card-body font-poppins text-xs">
          <h2 className="card-title font-montserrat text-base">Nama Psikolog</h2> 
          <p className='-mb-3'>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p> 
          <div className="justify-center card-actions">
            <Button type='more'>read more</Button>
          </div>
        </div>
      </div> 
    </>
  )
}