import { useSelector } from "react-redux"
import CartElement from "../components/cart/CartElement"
import usePurchase from "../hooks/usePurchase"

const CartSide = () => {
  const cart = useSelector((states) => states.cart)
  const totalPrice = cart.reduce((acc,cv) => {
    const subtotal = cv.quantity*cv.product.price
    return acc+subtotal
  },0)
  const {makePurchase} = usePurchase()
  const handlePurchase = () => {
    makePurchase()
  }
  return (
    <section className="z-20 max-h-screen min-h-screen p-4 border-l-2 pt-[60px] grid grid-cols-1">
      <h2 className="my-4 text-xl font-semibold">Shopping cart</h2>
      <div className="relative overflow-y-scroll">
        <div>
          {
            cart.map((prod) => (
              <CartElement
                key={prod.id}
                prod={prod}
              />
            ))
          }
        </div>
      </div>
      <footer className="border-t-2 w-full ">
        <div className="flex justify-between my-4">
          <span className="text-gray-300 font-semibold">Total: </span>
          <span className="font-semibold">${totalPrice}.00</span>
        </div>
        <button onClick={handlePurchase} className="bg-red-500 hover:bg-red-600 text-white w-full py-2 font-semibold my-8">Purchase</button>
      </footer>
    </section>
  )
}

export default CartSide