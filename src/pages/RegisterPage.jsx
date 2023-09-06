import { useForm } from "react-hook-form"
import useAuth from "../hooks/useAuth"
import { Link } from "react-router-dom"

const RegisterPage = () => {
  const {register,handleSubmit,reset} = useForm()
  const {createUser} = useAuth()
  const submit =(data) => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users'
    createUser(url,data)
    reset({
      firstName:'',
      lastName:'',
      email:'',
      password:'',
      phone:''
    })
  }
  return (
    <div className="h-screen flex justify-center items-center">
      <form className="mx-4 mt-8 border-t shadow rounded-xl p-4 w-[400px]" onSubmit={handleSubmit(submit)}>
        <h1 className="text-2xl font-semibold mb-8">Sing Up</h1>
        <div className="flex flex-col gap-1 mb-4">
          <label htmlFor="firstName">First Name</label>
          <input {...register('firstName')} className="border p-1" type="text" id="firstName" />
        </div>
        <div className="flex flex-col gap-1 mb-4">
          <label htmlFor="lastName">Last Name</label>
          <input {...register('lastName')} className="border p-1" type="text" id="lastName" />
        </div>
        <div className="flex flex-col gap-1 mb-4">
          <label htmlFor="email">Email</label>
          <input {...register('email')} className="border p-1" type="email" id="email" />
        </div>
        <div className="flex flex-col gap-1 mb-4">
          <label htmlFor="password">Password</label>
          <input {...register('password')} className="border p-1" type="password" id="password" />
        </div>
        <div className="flex flex-col gap-1 mb-4">
          <label htmlFor="phone">Phone(10 characters)</label>
          <input {...register('phone')} className="border p-1"
          type="text" id="phone" />
        </div>
        <button className="bg-red-500 hover:bg-red-600 w-full text-white py-2">Sing Up</button>
        <p className="text-sm font-extralight mt-4">Already have an account? <Link className="text-red-400 hover:text-red-200" to={'/login'}>Log in</Link></p>
      </form>
    </div>
  )
}

export default RegisterPage