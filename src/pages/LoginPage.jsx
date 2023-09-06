import { useForm } from "react-hook-form"
import useAuth from "../hooks/useAuth"
import { Link } from "react-router-dom"

const LoginPage = () => {
  const {register,handleSubmit,reset} = useForm()
  const {loginUser} = useAuth()
  const submit =(data) => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users/login'
    loginUser(url,data)
    reset({
      email:'',
      password:''
    })
  }
  return (
    <div className="h-screen flex justify-center items-center">
      <form className="mx-4 border-t shadow rounded-xl p-4 w-[400px]" onSubmit={handleSubmit(submit)}>
        <h1 className="text-2xl font-semibold mb-8">Welcome! Please, enter your email and password to continue.</h1>
        <div className="flex flex-col gap-1 mb-4">
          <label htmlFor="email">Email</label>
          <input {...register('email')} className="border p-1" type="email" id="email"/>
        </div>
        <div className="flex flex-col gap-1 mb-4">
          <label htmlFor="password">Password</label>
          <input {...register('password')} className="border p-1" type="password" id="password"/>
        </div>
        <button className="bg-red-500 hover:bg-red-600 w-full text-white py-2">Login</button>
        <p className="text-sm font-extralight mt-4"> Don't have an account? <Link className="text-red-400 hover:text-red-200" to={'/register'}>Sing up</Link></p>
      </form>
    </div>
  )
}

export default LoginPage
