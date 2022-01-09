export default function CardTestimoniPsikolog({img, title, desc}) {
  return (
    <>
      <div className="card card-side my-2">
        <img className="rounded-full object-cover lg:p-5 w-12 h-12 lg:w-20 lg:h-20" src="https://picsum.photos/id/1005/400/250"/>
        <div className="card-body -my-3 -m-5 lg:-ml-8 font-poppins">
          <h2 className="card-title line-clamp-1 text-sm text-dark-green font-montserrat -mt-3 lg:-mt-0">Horizontal</h2> 
          <p className='-mb-5 text-xs'>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p> 
        </div>
      </div>
    </>
  )
}