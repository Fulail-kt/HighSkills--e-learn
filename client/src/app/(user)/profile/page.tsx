import Navbar from "@/components/Navbar"
import Image from "next/image"
import user from '../../../../public/images/user.png'

const page = () => {
  return (
    <>
    <div className="h-screen w-full">
        <div className="w-full"><Navbar/></div>
            <div className="w-full flex items-center  h-full justify-evenly">
                <div className="bg-violet-600 rounded relative h-100 py-28 w-100">
                    <div className="absolute flex justify-center w-full -top-20"> <Image src={user} alt='user' width={150} height={150} /> </div>
                    <div className=" flex flex-col justify-center h-full px-6 ">
                        <p>Mohan Shankar</p>
                        <p>mohan@gmail.com</p>
                        <p>9087437238</p>
                        <p></p>
                        <p></p>
                        <p></p>
                        <p></p>
                    </div>
                </div>
                <div className=" flex flex-col gap-y-4  text-base   w-[60%]">
                  <div className="flex justify-between w-full items-center border border-violet-600"><p className="w-1/3">Name</p><input className="w-2/3 text-black" type="text" placeholder="Name" /></div>
                  <div className="flex justify-between w-full items-center border border-violet-600"><p className="w-1/3">Email</p><input className="w-2/3 text-black" type="text" placeholder="Email" /></div>
                  <div className="flex justify-between w-full items-center border border-violet-600"><p className="w-1/3">Phone</p><input className="w-2/3 text-black" type="text" placeholder="Phone" /></div>
                  <div className="flex justify-between w-full items-center border border-violet-600"><p className="w-1/3">Linkedin</p><input className="w-2/3 text-black" type="text" placeholder="Linkedin" /></div>
                  <div className="flex justify-between w-full items-center border border-violet-600"><p className="w-1/3">Pinterest</p><input className="w-2/3 text-black" type="text" placeholder="Pinterest" /></div>
                  {/* <input type="text" placeholder="Email" />
                  <input type="text" placeholder="Phone" />
                  <textarea rows={2} cols={4} placeholder="Biography" />
                  <textarea rows={2} cols={4} placeholder="Biography" />
                  <textarea rows={2} cols={4} placeholder="Biography" />
                  <input type="text" /> */}
                </div>
            </div>
    </div>
      
    </>
  )
}

export default page
