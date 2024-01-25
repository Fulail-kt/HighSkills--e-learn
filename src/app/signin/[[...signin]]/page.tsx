import Navbar from "@/components/Navbar";
import { SignIn } from "@clerk/nextjs";
 
export default function Page() {
  return <>
   <div className='w-full z-10 fixed'><Navbar/></div>
   <div className=" h-screen flex items-center">
       <SignIn />
   </div>
  </>;
}