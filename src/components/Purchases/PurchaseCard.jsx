const PurchaseCard = ({prod}) => {
  return (
    <article className="border md:border-0 mx-4 grid grid-cols-2 justify-center md:grid-cols-4 items-center px-8 md:px-60 mb-8">
      <img className="place-content-center w-16 h-16 object-contain" src={prod.product.images[0].url} alt="" />
      <h3 className="text-center md:text-left md:mr-8">{prod.product.title} </h3>
      <span className="md:border rounded-lg pl-6 md:text-center">{prod.quantity} </span>
      <span className=" text-center font-semibold">${prod.product.price}.00 </span>
    </article>
  )
}

export default PurchaseCard
