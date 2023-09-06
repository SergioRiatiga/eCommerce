import { useForm } from "react-hook-form"

const FilterPrice = ({priceMinMax,setpriceMinMax}) => {
  const {register,reset,handleSubmit} = useForm()
  const Submit = (data) => {
    const min = data.from.trim() === ''? 0 : +data.from
    const max = data.to.trim() === ''? Infinity : +data.to
    setpriceMinMax({min,max})
  }
  const handleClearFilter =() => {
    setpriceMinMax({min:0,max:Infinity})
    reset({from:'',to:''})
  }
  return (
    <article className="mb-8 border-b pb-8">
      <h2 className="text-xl font-semibold mb-4">Price</h2>
      <form className="mb-4" onSubmit={handleSubmit(Submit)}>
        <ul className="pb-4">
          <li className="flex justify-between pb-4">
            <label className="mx-2" htmlFor="from">From</label>
            <input className="border pl-2" {...register('from')} type="text" id="from" />
          </li>
          <li className="flex justify-between">
            <label className="mx-2" htmlFor="to">To</label>
            <input className="border pl-2" {...register('to')} type="text" id="to" />
          </li>
        </ul>
          <button className="w-1/2 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 ml-28">Filter price</button>
      </form>
      {
        priceMinMax.min !== 0 || priceMinMax.max !== Infinity? <p>From {priceMinMax.min} to {priceMinMax.max} <span onClick={handleClearFilter} className="text-red-500 text-2xl hover:text-red-600 hover:scale-105 cursor-pointer"><i className='bx bx-x'></i></span> </p> : ''
      }
    </article>
  )
}

export default FilterPrice
