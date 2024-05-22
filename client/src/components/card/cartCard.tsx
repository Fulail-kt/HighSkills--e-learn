import Image from 'next/image'
import React from 'react'
import img from '../../../public/images/selfdriving.webp'

const CartCard = () => {
  return (
    // <div className='w-full f' >
      <div className="border border-violet-600 flex w-full justify-between relative  h-24 rounded-md">
              <div className='w-full flex  '>
                  <div className="w-[15%] rounded-md flex justify-center items-center ml-4 "> <Image src={img} width={200}  className='rounded-md h-100' alt="Course image"/></div>
                  <div className="text-xs px-5 flex flex-col justify-center text-start">
                    <h1 className="text-base">JavaScript The Complete Guide 2024</h1>
                    <p>By John Doe</p>
                    <div className="flex">
                      <span className="bg-yellow-300 rounded-md"></span>
                      <h1>4 <span className="text-yellow-400">★★★★☆ (1,330 ratings)</span></h1>
                    </div>
                    <div className="flex font-thin text-[10px] gap-x-2"><p>7 total hours</p>	&#8226; <p>50 lectures</p> &#8226; <p>All levels</p></div>
                  </div>
              </div>
              <div className='flex  absolute right-5 h-full justify-center items-center'>
              <button className='border text-xs rounded py-1 px-2 hover:bg-violet-800 hover:text-red-500 hover:border-red-500 '>x</button>
              </div>
            </div>
    // </div>
  )
}

export default CartCard
