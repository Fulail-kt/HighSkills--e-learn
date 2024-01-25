/* @jsxRuntime classic */
/* @jsxImportSource react */
'use client'

import { authMiddleware } from "@clerk/nextjs";
import Navbar from "@/components/Navbar";
import { courses } from "@/constant/course";
import Image from "next/image";
import { useState, useEffect } from "react";

const CourseDetail = ({ params, userId }: { params: any, userId: string | null }) => {
 const courseId = params.courseId;
 const [course, setCourse] = useState<any>({});

 useEffect(() => {
    const filteredCourse = courses.filter((item) => item.id === courseId);
    setCourse(filteredCourse);
 }, [courseId]);

 return (
    <>
      {/* <div className="w-full fixed"><Navbar/></div> */}
      <div className="w-full flex justify-center min-h-screen items-center">
        {course && courseId ? (
          <div className="w-2/3 h-[500px] flex justify-center gap-x-10">
            <div className="border w-full p-2 flex items-center rounded-md border-violet-500 h-full bg-gradient-to-r from-violet-900 to-gray-900">
              <div className="w-1/2 shadow-xl">
                <Image src={course[0]?.image} alt="Course Image" className="rounded-md" width={500} height={300} />
              </div>
              <div className="w-1/2 p-2">
                <p className="text-3xl m-2 font-bold">{course[0]?.title}</p>
                <p className="text-sm">{course[0]?.description}</p>
                <p className="text-sm m-4">Instructor: {course[0]?.instructor}</p>
                <p>₹ {course[0]?.price}</p>
              </div>
            </div>
          </div>
        ) : (
          <p>Course not found</p>
        )}
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
