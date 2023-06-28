import { useSelector } from "react-redux"
import CardProduct from "../components/Home/CardProduct";
import './styles/home.css'
import { useState } from "react";

const Home = () => {

  const [inputValue, setInputValue] = useState('')

  const products = useSelector((states) => states.products)

  const handleSearchName = (e) => {
    setInputValue(e.target.value.toLowerCase())
  }

  const cbFilter = (prod) => prod.title.toLowerCase().includes(inputValue)

  return (
    <div className="home__container">
      <div className="home__search">
        <label className="home__search__label" htmlFor="">Search</label>
        <input value={inputValue} className="home__search__input" onChange={handleSearchName} type="text" />
      </div>
      <div className="card__container">
        {
          products?.filter(cbFilter).map((prod) => (
            <CardProduct
              key={prod.id}
              prod={prod}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Home