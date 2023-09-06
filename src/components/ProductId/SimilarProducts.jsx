import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import CardProduct from "../Home/CardProduct"

const SimilarProducts = ({product}) => {
  const baseUrl ='https://e-commerce-api-v2.academlo.tech/api/v1'
  const [productByCategory, getProductByCategory] = useFetch(baseUrl)
  useEffect(() => {
    product && getProductByCategory(`/products?categoryId=${product.categoryId}`)
  }, [product])

  return (
    <div>
      <h2 className="mx-4 text-red-500 font-semibold"> Discover Similar Products</h2>
      <div 
        className=" gap-4 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4"
      >
        {
          productByCategory?.map((prod) => (
            product.id !== prod.id &&
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

export default SimilarProducts
