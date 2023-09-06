import { useEffect } from "react"
import usePurchase from "../hooks/usePurchase"
import PurchaseCard from "../components/Purchases/PurchaseCard"

const PurchasePage = () => {
  const {purchases,getAllPurchses} = usePurchase()
  useEffect(() => {
    getAllPurchses()
  }, [])
  
  return (
    <div className="pt-16">
      <h2 className="px-8 md:px-60 text-2xl pb-20 pt-4 font-semibold">My purchases</h2>
      <div>
        {
          purchases?.map((prod) => (
            <PurchaseCard
              key={prod.id}
              prod={prod}
            />
          ))
        }
      </div>
    </div>
  )
}

export default PurchasePage