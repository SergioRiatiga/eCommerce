import { useState } from "react"

const SliderImgs = ({product}) => {
  const [curr, setCurr] = useState(0)
  const handlePrev =() => {
    curr-1 >= 0? setCurr(curr-1) : setCurr(2)
  }
  const handleNext =() => {
    curr+1 <= 2? setCurr(curr+1) : setCurr(0)
  }
  return (
    <>
      <div className="w-full max-w-xl relative overflow-hidden mx-4">
        <div className="flex w-[300%] duration-500" 
          style={{transform:`translateX(calc((-${curr}/3)*100%))`}}
        >
          {
            product?.images.map((img) => (
              <div
                className="w-full aspect-square p-12"
                key={img.id}
              >
                <img className="w-full h-full object-contain" src={img.url} alt="" />
              </div>
            ))
          }
        </div>
        <div className="absolute inset-0 flex items-center justify-between">
          <button onClick={handlePrev} className="w-8 aspect-square rounded-full bg-red-500 hover:bg-red-600 text-white text-xl "><i className='bx bx-chevron-left' ></i></button>
          <button onClick={handleNext} className="w-8 aspect-square rounded-full bg-red-500 hover:bg-red-600 text-white text-xl"><i className='bx bx-chevron-right' ></i></button>
        </div>
        <div  className="w-full max-w-xl flex justify-center p-1">
          <div className="flex justify-center w-1/2 gap-3">
            {
              product?.images.map((img,i) => (
                <div
                  className={`w-full aspect-square hover:scale-105 z-10 cursor-pointer p-1 ${i === curr && 'border-2 border-red-500 rounded-lg'}`}
                  key={img.id}
                  onClick={() => setCurr(i)}
                >
                  <img className="w-full h-full object-contain" src={img.url} alt="" />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
    
  )
}

export default SliderImgs
