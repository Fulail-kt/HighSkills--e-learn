import Navbar from '@/components/Navbar';
import CourseCard from '@/components/card/Card';
import { courses } from '@/constant/course';
export default function course() {
    return <>
    <div className='w-full fixed'><Navbar/></div>
     <div className=" min-h-screen mt-40 md:mt-24 xl:mt-0 flex items-center">
     <div className='w-full  place-items-center gap-x-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-6'>
          {courses.map((item, index) => (
            <CourseCard key={index} course={item} />
          ))}
        </div>
     </div>
    </>;
  }