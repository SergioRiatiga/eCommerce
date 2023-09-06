import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { getAllProductsThunk } from "./store/slices/products.slice"
import ProductIdPage from "./pages/ProductIdPage"
import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"
import Header from "./components/shared/Header"
import { getCartThunk } from "./store/slices/cart.slice"
import PurchasePage from "./pages/PurchasePage"

import ProtectedRoutes from "./pages/ProtectedRoutes"

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllProductsThunk())
    dispatch(getCartThunk())
  }, [])
  
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/product/:id" element={<ProductIdPage/>}/>
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route element={<ProtectedRoutes/>}>
          <Route path="/purchases" element={<PurchasePage/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
