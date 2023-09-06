import { useDispatch } from "react-redux"
import { deleteCartThunk } from "../../store/slices/cart.slice"

const CartElement = ({prod}) => {
  const dispatch = useDispatch()
  const handleDelete =() => {
    dispatch(deleteCartThunk(prod.id))
  }
  return (
    <article>
      <header className="grid grid-cols-3 items-center ">
        <section className="">
          <img  className="w-16 h-16 object-contain" src={prod.product.images[0].url} alt="" />
        </section>
        <section className="flex flex-col">
          <h3 className="text-xs">{prod.product.title} </h3>
          <p>
            <span>{prod.quantity} </span> x <span>${prod.product.price} </span>
          </p>
        </section>
        <button onClick={handleDelete}  className="text-red-500">
          <i className='bx bx-trash'></i>
        </button>
      </header>
      <footer className="flex justify-end gap-4 mt-2 mb-8">
        <span className=" text-gray-300">Total: </span>
        <span className="font-semibold">${prod.quantity*prod.product.price}.00 </span>
      </footer>
    </article>
  )
}

export default CartElement
