
'use client'

import { courses } from "@/constant/course";
import Image from "next/image";
import { useState, useEffect } from "react";
import ModuleCard from "@/components/moduleCard";
import Nav from "@/components/nav";
import CourseCard from "@/components/card/Card";

const CourseDetail = ({ params, userId }: { params: any, userId: string | null }) => {
  console.log(params,"dd")
  const courseId = params.courseId;
  const [course, setCourse] = useState<any>({});

  useEffect(() => {
    const filteredCourse = courses.filter((item) => item.id === courseId);
    setCourse(filteredCourse);
  }, [courseId]);

  return (
    <>
      {/* <div className="w-full fixed"><Nav/></div> */}
      <div className="w-full min-h-screen flex flex-col justify-center items-center">
        <div className="w-full flex justify-center h-100 items-center py-3">
          {course && courseId ? (
            <div className="w-[95%] md:w-2/3 flex justify-center items-center gap-x-10">
              <div className="border w-full px-3 py-3 md:py-20 flex flex-col md:flex-row items-center justify-center rounded-md border-violet-500 h-full bg-gradient-to-r from-violet-900 to-gray-900">
                <div className="w-full md:w-1/2 shadow-xl">
                  <Image src={course[0]?.image} alt="Course Image" className="rounded-md" width={500} height={300} />
                
                </div>
                <div className="w-full md:w-1/2 p-2 ">
                  <p className="text-base md:text-3xl m-2 font-bold">{course[0]?.title}</p>
                  <p className="text-xs md:text-sm">{course[0]?.description}</p>
                  <p className="text-xs md:text-sm m-4">Instructor: {course[0]?.instructor}</p>
                  <p>₹ {course[0]?.price}</p>
                  <div className="mt-4 flex justify-center gap-x-2">
                    <button className="text-base hover:bg-violet-500  hover:shadow-md hover:shadow-violet-600 hover:text-[#110f1d] hover:font-semibold bg-black rounded-full py-2 px-4">Add to cart</button>
                    <button className="text-base hover:bg-violet-500  hover:shadow-md hover:shadow-violet-600 hover:text-[#110f1d] hover:font-semibold bg-black rounded-full py-2 px-4">o</button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <p>Course not found</p>
          )}
        </div>
        <div className="w-full bg-gray-700 ">
          <ul className="flex p-2 gap-x-4 text-xs md:gap-x-16 cursor-pointer md:text-sm justify-center">
            <li>Overview</li>
            <li>Course content</li>
            <li>Reviews</li>
            <li>Notes</li>
            <li>Quiz</li>
          </ul>
        </div>
        <div className="flex flex-col md:flex-row  md:justify-center gap-y-4 gap-x-16 m-3 p-2 w-full ">
          <div className="border flex flex-col justify-center items-center p-3 border-violet-800  rounded-md w-100 px-10 md:px-20">
            <h1 className="text-xl pb-1.5 text-violet-500 font-semibold font-sans">What You will Learn</h1>
            <div className="">
              <ul className="text-sm font-extralight text-left list-decimal">
                <li>Extensive, informative and interesting video lecture</li>
                <li>Lab Solution Sets</li>
                <li>All Powerpoint Demonstrations Used in Course</li>
                <li>Complete Code demonstrated in lecture</li>
                <li>Instructor contact Email for questions and clarifications</li>
              </ul>
            </div>
          </div>
          <div className="border flex flex-col justify-center items-center border-violet-800 w-100 px-10 md:px-20 p-3 rounded-md">
            <h1 className="text-xl py-1 font-sans pb-1.5 text-violet-500 font-semibold">This course includes:</h1>
            <div>
              <ul className="text-sm font-extralight text-left list-decimal">
                <li>7.5 hours on-demand video</li>
                <li>6 coding exercises</li>
                <li>25 downloadable resources</li>
                <li>Access on mobile and TV</li>
                <li>Certificate of completion</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full">
          <h1>Coure content</h1>
          <ModuleCard />
          <ModuleCard />
          <ModuleCard />
        </div>

        <div className="w-[70%]">
          <h1 className="text-left text-base" >More courses</h1>

      
          <div className='w-full place-items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-6'>
          {courses.map((item, index) => (
            item.id !== courseId && (
              <CourseCard key={index} course={item} />
            )
          ))}
        </div>
        
        </div>
      </div>
    </>
  );
};

// export async function getServerSideProps(context: { req: any; res: any; }) {
//  const session = await require("@clerk/nextjs").withSession(context.req, context.res);
//  const userId = session?.userId || null;

//  return {
//     props: { userId }, // will be passed to the page component as props
//  };
// }

export default CourseDetail;
