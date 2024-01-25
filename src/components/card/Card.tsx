// CourseCard.js
import Image from 'next/image';
import Link from 'next/link';

const CourseCard = ({course}:{course:any}) => {
  return (
    <div className="shadow-md rounded-md w-56 h-64  bg-gray-800 overflow-hidden">
        <Link href={`/course/${course.id}`}>
          <div className="relative h-40 rounded">
            <Image
              src={course?.image}
              alt={course?.title}
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
          </div>
          <div className="text-white p-2 ">
            <h2 className="text-[15px] font-bold mb-1 tracking-normal leading-6">{course?.title}</h2>
            <p className=" text-xs ">{course?.description}</p>
          </div>
      </Link>
    </div>
  );
};

export default CourseCard;
