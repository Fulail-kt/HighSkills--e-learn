import Navbar from "@/components/Navbar";
import { SignUp } from "@clerk/nextjs";
 
export default function Page() {
  return <>
   <div className='w-full z-10 fixed'><Navbar/></div>
   <div className="flex mt-14 items-center h-screen">
       <SignUp />
   </div>
  </>;
}