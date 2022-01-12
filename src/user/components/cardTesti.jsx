export default function CardTestimoniPsikolog({img, title, desc}) {
  return (
    <>
      <div className="card card-side my-2">
        <img className="rounded-full object-cover lg:p-5 w-12 h-12 lg:w-20 lg:h-20" src={img}/>
        <div className="card-body -my-3 -m-5 lg:-ml-8 font-poppins">
          <h2 className="card-title line-clamp-1 text-sm text-dark-green font-montserrat -mt-3 lg:-mt-0">{title}</h2> 
          <p className='-mb-5 text-xs h-16 line-clamp-4'>{desc}</p> 
        </div>
      </div>
    </>
  )
}