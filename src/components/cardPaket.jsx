import Button from "./button";

export default function CardPaket () {
  return (
    <>
      <div class="card shadow-2xl">
        <h3 class="card-title font-montserrat text-base py-8 capitalize text-center bg-accent text-accent-content">pakeet 1</h3>
        <div class="card-body font-poppins -m-4">
          <div className="grid grid-cols-12 mb-2">
            <div className="col-span-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="#32BEA6">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
            </div>
            <div className="col-span-11 ml-3 text-sm">
              Rerum reiciendis beatae
            </div>
          </div>
          <div class="justify-center card-actions capitalize">
            <p className="text-center text-sm">Gratis</p>
            <Button type='buyNow'>beli sekarang</Button>
          </div>
        </div>
      </div>
    </>
  )
}