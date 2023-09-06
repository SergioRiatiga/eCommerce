import { useSelector } from "react-redux"
import CardProduct from "../components/Home/CardProduct"
import { useState } from "react"
import FilterCategory from "../components/Home/FilterCategory"
import FilterPrice from "../components/Home/FilterPrice"

const Home = () => {
  const [inputValue, setInputValue] = useState('')
  const [priceMinMax, setpriceMinMax] = useState({
    min:0,
    max:Infinity
  })
  const products = useSelector((states) => states.products)
  const handleSearchName= (e) => {
    setInputValue(e.target.value.toLowerCase())
  }
  const cbFilter = (prod) => prod.title.toLowerCase().includes(inputValue)
  const cbFilterPrice = (prod) => priceMinMax.min <= prod.price && prod.price <= priceMinMax.max

  const [filter, setFilter] = useState(true)

  const handleFilter = () => {
    setFilter(!filter)
  }

  return (
    <div className="pt-16">
      <div className="w-full  flex justify-center">
        <label className="my-4  bg-red-500 text-white px-4" htmlFor="">Search</label>
        <input 
          value={inputValue} 
          className="border w-1/3 my-4 pl-2" 
          onChange={handleSearchName} 
          type="text" />
      </div>
      <div className="w-full flex justify-end pr-10 cursor-pointer">
        <div className="md:scale-0" onClick={handleFilter}>
          <span className="text-gray-400 mr-4">
            Filter
          </span>
          {
            filter?
            <span className=" text-gray-400 text-xl">
              <i className='bx bx-filter-alt'></i>
            </span> :
            <span className="text-red-500">
              <i className='bx bx-x'></i>
            </span>
          }
        </div>
      </div>
      <div className="flex justify-center">
        <aside className={`p-4 mr-8 flex z-10 flex-col absolute h-screen left-12 md:left-0 w-70 bg-white overflow-y-auto md:scale-100 md:translate-y-0 duration-500 ${filter && 'scale-0 -translate-y-full duration-500'}`}>
          <FilterPrice
            priceMinMax={priceMinMax}
            setpriceMinMax={setpriceMinMax}
          />
          <FilterCategory/>
        </aside>
        <div className="md:ml-48 grid place-content-center md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {
            products?.filter(cbFilter).filter(cbFilterPrice).map((prod) => (
              <CardProduct
                key={prod.id}
                prod={prod}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Home
