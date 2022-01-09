import Button from "./button";

export default function CardPaket ({name, desc, price}) {
  return (
    <>
      <div className="card shadow-2xl my-2">
        <h3 className="card-title font-montserrat text-base py-8 capitalize text-center bg-accent text-accent-content">{name}</h3>
        <div className="card-body font-poppins -m-4">
          <div className="mb-2 text-sm whitespace-pre-line align-bottom h-16">
            {desc}
          </div>
          <div className="justify-center card-actions capitalize">
            <p className="text-center text-sm">Rp {
                    new Intl.NumberFormat(['ban', 'id']).format(Number(price))}</p>
            <Button type='buyNow'>beli sekarang</Button>
          </div>
        </div>
      </div>
    </>
  )
}