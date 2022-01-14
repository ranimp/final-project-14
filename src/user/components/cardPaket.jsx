import payment from "../images/credit.png"
import { Link } from "react-router-dom";

export default function CardPaket ({name, desc, price}) {
  return (
    <>
      <div className="card shadow-2xl my-2">
        <h3 className="card-title font-montserrat text-base py-8 capitalize text-center bg-accent text-accent-content">{name}</h3>
        <div className="card-body font-poppins -m-4">
          <div className="mb-2 text-sm whitespace-pre-line align-bottom h-16">
            {desc}
          </div>
          <div className="justify-center card-actions">
            <p className="text-center text-sm">Rp {
                    new Intl.NumberFormat(['ban', 'id']).format(Number(price))}</p>
            <a href="#my-modal" className="btn bg-dark-green hover:btn-accent border-0 w-full" >beli sekarang</a> 
            <div id="my-modal" className="modal">
              <div className="modal-box bg-light-green">
                <img src={payment} className="mx-auto w-1/2 my-3"/>
                <p className="text-black">Yakin pilih paket ini?</p> 
                <div className="modal-action">
                  <Link to="/payment">
                    <a href="#" className="btn btn-accent">Ya</a> 
                  </Link>
                  <a href="#" className="btn">Tidak</a> 
                </div>
              </div>
            </div> 
          </div>
        </div>
      </div>
    </>
  )
}