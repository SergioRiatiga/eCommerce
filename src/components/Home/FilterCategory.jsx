import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import { getAllProductsThunk } from "../../store/slices/products.slice"
import { useDispatch } from "react-redux"

const FilterCategory = () => {
  const dispatch = useDispatch()
  const baseUrl = 'https://e-commerce-api-v2.academlo.tech/api/v1'
  const [categories,getAllCategories] =useFetch(baseUrl)
  useEffect(() => {
    getAllCategories('/categories')
  }, [])
  const handleFilterCategory =(id) => {
    const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${id}`
    id? dispatch(getAllProductsThunk(url)):
    dispatch(getAllProductsThunk())
  }
  return (
    <article>
      <h2 className="text-xl font-semibold">Categories</h2>
      <ul className="pl-4 pt-4">
        <li onClick={() => handleFilterCategory()} className="cursor-pointer">All</li>
        {
          categories?.map((category) =>(
            <li 
              onClick={() => handleFilterCategory(category.id)} className="py-1 cursor-pointer" 
              key={category.id}
            >
              {category.name} 
            </li>
          ))
        }
      </ul>
    </article>
  )
}

export default FilterCategory
