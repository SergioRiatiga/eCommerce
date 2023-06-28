import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"
import ProductInfo from "../components/ProductId/ProductInfo"
import SimilarProducts from "../components/ProductId/SimilarProducts"
import SlidersImgs from "../components/ProductId/SlidersImgs"
import './styles/productIdPage.css'

const ProductIdPage = () => {

  const { id }= useParams()

  const baseUrl = 'https://e-commerce-api-v2.academlo.tech/api/v1'

  const [product, getProductById] = useFetch(baseUrl)

  useEffect(() => {
    getProductById(`/products/${id}`)
  }, [id])

  return (
    <div>
      <div className="imgInfo__container">
        <div className="sliderImg__container">
          <SlidersImgs
            product={product}
          />
        </div>
        <div className="prodcutInfo__container">
          <ProductInfo
            product={product}
          />
        </div>
      </div>
      <div className="similarProducts__container">
        <SimilarProducts
          product={product}
        />
      </div>
    </div>
    
  )
}

export default ProductIdPage