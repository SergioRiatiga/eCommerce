import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"
import ProductInfo from "../components/ProductId/ProductInfo"
import SimilarProducts from "../components/ProductId/SimilarProducts"
import SliderImgs from "../components/ProductId/SliderImgs"

const ProductIdPage = () => {
  const {id} = useParams()
  const baseUrl = 'https://e-commerce-api-v2.academlo.tech/api/v1'
  const [product, getProductById] = useFetch(baseUrl)
  useEffect(() => {
    getProductById(`/products/${id}`)
  }, [id])
  return (
    <div className="pt-16 flex flex-col items-center justify-center gap-y-8">
      <div className="mx-4 flex flex-col lg:flex-row items-center justify-center">
        <SliderImgs
          product={product}
        />
        <ProductInfo
          product={product}
        />
      </div>
      <div>
        <SimilarProducts
          product={product}
        />
      </div>
      
    </div>
  )
}

export default ProductIdPage