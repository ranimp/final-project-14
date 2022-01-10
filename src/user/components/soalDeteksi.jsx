export default function SoalDeteksi({name}) {
  return (   
    <div className="card lg:card-side bg-light-green text-black mb-5">
      <div className="card-body">
        <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p> 
        <div className="card-actions justify-center">
          <div className="form-control">
            <label className="cursor-pointer label">
              tidak pernah
              <input type="radio" name={name} className="radio radio-accent mx-4" value="1"/>
              <input type="radio" name={name} className="radio radio-accent mr-4" value="2"/>
              <input type="radio" name={name} className="radio radio-accent mr-4" value="3"/>
              <input type="radio" name={name} className="radio radio-accent mr-4" value="4"/>
              <input type="radio" name={name} className="radio radio-accent mr-4" value="5"/>
              selalu
            </label>
          </div> 
        </div>
      </div>
    </div>
  )
}