import { useState } from "react"
import { Link } from "react-router-dom"
import CartSide from "../../pages/CartSide"


const Header = () => {
  const [cart, setCart] = useState(true)
  const handleCart =() => {
    setCart(!cart)
  }
  return (
    <header className="z-30 w-full flex justify-between md:shadow bg-white fixed">
      <h1 className="text-3xl text-red-500 font-semibold ml-4 py-2">
        <Link to='/'>e-commerce</Link>
      </h1>
      <nav className="z-20 bg-white md:shadow">
        <ul className="flex text-gray-400">
          <Link to='/register'>
            <li className="text-2xl px-2 md:px-20 md:border-l h-[60px] flex items-center">
              <i className='bx bx-user'></i>
            </li>
          </Link>
          <Link to='/purchases'>
            <li className="text-2xl px-2 md:px-20 md:border-l h-[60px] flex items-center">
              <i className='bx bx-purchase-tag-alt' ></i>
            </li>
          </Link>
          <li onClick={handleCart} className="text-2xl px-2 md:px-20 md:border-l h-[60px] flex items-center cursor-pointer">
              {
                cart?<i className='bx bx-cart' ></i>:
                <div className="text-red-500">
                  <i className='bx bx-x'></i>
                </div>
              }
          </li>
        </ul>
      </nav>
      <aside className={`z-10 flex flex-col absolute h-screen right-0 w-80 bg-white overflow-y-auto duration-500 ${cart && 'scale-0 -translate-y-full duration-500'}`}>
        <CartSide/>
      </aside>
    </header>
  )
}

export default Header
