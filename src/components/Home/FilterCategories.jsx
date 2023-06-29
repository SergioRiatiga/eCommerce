import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import './styles/filterCategories.css'
import { getAllProductsThunk } from "../../store/slices/products.slice"
import { useDispatch } from "react-redux"

const FilterCategories = () => {

  const baseUrl ='https://e-commerce-api-v2.academlo.tech/api/v1'

  const [ categories, getAllCategories ] = useFetch(baseUrl)

  useEffect(() => {
    getAllCategories('/categories')
  }, [])

  const dispatch = useDispatch()
  
  const handleFilterCategory = (id) => {
    if (id) {
      const url =`https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${id}`
      dispatch(getAllProductsThunk(url))
    } else {
      dispatch(getAllProductsThunk())
    }
  }
    

  return (
    <article className="categories">
      <h3 className="categories__name">Categories</h3>
      <ul className="categories__list">
        <li className="categories__item" onClick={() => handleFilterCategory()}>All</li>
        {
          categories?.map((category) => (
            <li className="categories__item" 
            onClick={() => handleFilterCategory(category.id)} 
            key={category.id}>{category.name}</li>
          ))
        }
      </ul>
    </article>
  )
}

export default FilterCategories