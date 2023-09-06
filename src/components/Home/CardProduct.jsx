import { useNavigate } from "react-router-dom"
import { postCartThunk } from "../../store/slices/cart.slice"
import { useDispatch } from "react-redux"

const CardProduct = ({prod}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleDetail = () => {
    navigate(`/product/${prod.id}`)
  }
  const handleAddCart = (e) => {
    e.stopPropagation()
    dispatch(postCartThunk(prod))
  }
  return (
    <article 
      className='w-full max-w-[300px]  min-w-[300px] shadow rounded-xl cursor-pointer hover:scale-105 transition m-4 hover:shadow-md bg-white border-t'
      onClick={handleDetail}
    >
      <header className='group relative border-b border-gray-200 aspect-[1.2]'>
        <div className="absolute p-4 w-full h-full opacity-0 group-hover:opacity-100 duration-500">
          <img className="w-full h-full object-contain" src={prod.images[1].url} alt="" />
        </div>
        <div className="absolute p-4 w-full h-full opacity-100
        hover:opacity-0 duration-500">
          <img className="w-full h-full object-contain" src={prod.images[0].url} alt="" />
        </div>
      </header>
      <section className="p-4 pt-6 grid grid-cols-2 gap-y-4">
        <header className="col-span-2">
        <h3 className="font-light font text-base">{prod.brand} </h3>
        <h2 className="font-medium text-lg">{prod.title} </h2>
        </header>
        <article>
          <span className="font-extralight text-xs">Price</span>
          <h3 className="font-medium">{`$${prod.price}`} </h3>
        </article>
        <button 
          className="w-12 aspect-square justify-self-end alignn place-self-end text-2xl rounded-full relative right-3 bg-red-500 text-white hover:bg-red-600"
          onClick={handleAddCart}
        >
        <i className='bx bx-cart'></i>
        </button>
      </section>
    </article>
  )
}

export default CardProduct
