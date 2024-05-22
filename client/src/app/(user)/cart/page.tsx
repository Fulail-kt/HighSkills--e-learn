import Navbar from "@/components/Navbar"
import CourseCard from "@/components/card/Card"
import CartCard from "@/components/card/cartCard"
import { courses } from "@/constant/course"
import Image from "next/image"


const page = () => {
  return (

    <>
    <div className="w-full"><Navbar/></div>
      <div className="w-full flex flex-col  items-center justify-center">
        <h1 className="text-start  w-full p-10 text-5xl font-bold tracking-wide">Shopping Cart</h1>
        
        <div className="w-full flex justify-evenly relative">
          {/* <div className=" flex flex-col bg-yellow-300 justify-center items-center"> */}
            {/* cart Card  */}
           <div className="w-[60%] flex py-10 flex-col gap-y-6  relative overflow-scroll">
          <p className="text-start top-0 left-0 absolute  text-sm">3 courses your cart</p>
             
                <CartCard/>
                <CartCard/>
                <CartCard/>
             
           </div>

            {/* More Course*/}
            {/* <div className="">
              <h1 className="text-start">More courses</h1>
              <div className='w-full place-items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-6'>
                {courses.map((item, index) => (
                  <CourseCard key={index} course={item} />
                ))}
              </div>
            </div> */}
          {/* </div> */}
          <div className="border border-violet-600 rounded-md flex flex-col p-5 text-start gap-y-6 w-80 h-96">
            <div>
              <div >
                <input type="text" placeholder="Enter Coupon"  className="w-full focus:outline-none rounded  border-0 text-black h-8" />
                <button className="w-full h-8 bg-violet-600 py-1 text-sm rounded px-3">Apply</button>
              </div>
            </div>
            <div className="flex flex-col  gap-y-3">
              <h1 className="">Total</h1>
              <p>Discount  : </p>
              <p className="text-5xl font-extrabold">
        ₹ 2000 
        <span className="text-xs font-light line-through ml-2">₹ 2200</span>
      </p>
            </div>
            <div className="flex justify-center w-full ">
            <button className="bg-violet-700  rounded-md px-3 py-2">Checkout</button>

            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default page
