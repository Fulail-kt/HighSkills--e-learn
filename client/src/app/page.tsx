
import React from 'react';
import Navbar from "@/components/Navbar";
import boy from '../../public/images/boy-drawing-on-tablet-3025702-2526900.png';
import boy2 from '../../public/images/boy-using-laptop.png'
import Image from "next/image";
import Carousel from '@/components/carousal/Carousal';
import CourseCard from '@/components/card/Card';
import { courses } from '@/constant/course';

export default function Home() {
  return (
    <>
      <div className='w-full z-10 fixed'><Navbar /></div>
      <div className="min-h-screen w-full mt-6 flex flex-col justify-center items-center">
      <div className="flex flex-col md:flex-row-reverse w-full h-auto md:h-96 items-center justify-around gap-x-10">
    <div className="w-full mt-3 md:w-3/6 h-80 rounded md:order-2">
        <div className="h-full w-50 flex justify-center items-center rounded relative overflow-hidden">
            <div className="flex absolute w-full top-8 md:top-3 right-1 justify-center">
                <Image className="w-24 md:w-32" height={140} src={boy} alt="My Image" />
            </div>
            <h1 className=" text-4xl sm:text-4xl md:text-6xl h-32 font-bold text-transparent bg-gradient-to-r from-neon-blue to-neon-pink bg-clip-text">
                Sync <span className="z-50">Your Brain,</span> <br/> Ignite Your Future.
            </h1>
        </div>
    </div>
    <div className="border border-[#985efe] flex justify-center items-center w-full md:w-2/5 h-80 rounded md:order-1">
        <Carousel images={[boy, boy2]} />
    </div>
</div>
        <div className='w-full place-items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-6'>
          {courses.map((item, index) => (
            <CourseCard key={index} course={item} />
          ))}
        </div>
      </div>
    </>
  );
}
