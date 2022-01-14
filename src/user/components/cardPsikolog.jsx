import { Link } from "react-router-dom";
import Button from './button';

export default function CardPsikolog({img, title, desc, link}) {
  return (
    <Link to={link}>
      <div className="card text-center">
        <div className='flex flex-col items-center pt-10'>
          <img className="rounded-full object-cover w-48 h-48" src={img} />
        </div>
        <div className="card-body font-poppins text-xs">
          <h2 className="card-title font-montserrat text-base">{title}</h2> 
          <p className='-mb-3 line-clamp-2'>{desc}</p> 
          <Link className="justify-center card-actions" to={link}>
            <Button type='more'>read more</Button>
          </Link>
        </div>
      </div> 
    </Link>
  )
}