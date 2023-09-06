import { useState } from "react"
import { postCartThunk } from "../../store/slices/cart.slice"
import { useDispatch } from "react-redux"

const ProductInfo = ({product}) => {
  const [quantity, setQuantity] = useState(1)
  const handlePlus =() => setQuantity((state) => state+1)
  const handleMinus =() => quantity-1>=1 && setQuantity((state) => state-1)
  const dispatch = useDispatch()
  const handleAddtoCart =() => {
    dispatch(postCartThunk(product,quantity))
  }
  return (
    <article className="max-w-md m-4">
      <h3 className="font-light pb-4">{product?.brand} </h3>
      <h2 className="text-2xl font-bold">{product?.title} </h2>
      <p className="p-4 pl-0">{product?.description} </p>
      <footer>
        <ul className="flex justify-between pr-36">
          <li className="flex flex-col">
            <span className="font-light mb-1">Price</span>
            <span className="font-semibold">${product?.price}</span>
          </li>
          <li className="flex flex-col">
            <span className="font-light text-center mb-1">Quantity</span>
            <div className="flex border justify-between">
              <div className="border-r px-2 cursor-pointer hover:bg-red-500 hover:text-white" onClick={handleMinus}>-</div>
              <div className="px-2">{quantity} </div>
              <div className="border-l px-2 cursor-pointer hover:bg-red-500 hover:text-white" onClick={handlePlus}>+</div>
            </div>
          </li>
        </ul>
        <button onClick={handleAddtoCart} className="bg-red-500 hover:bg-red-600 px-4 py-2 text-white rounded-xl mt-4 w-full">Add to cart <i className='bx bx-cart'></i></button>
      </footer>
    </article>
  )
}

export default ProductInfo
