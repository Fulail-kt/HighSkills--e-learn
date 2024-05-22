const ModuleCard = () => {
  return (
    <div className="w-full flex justify-center items-center p-1">
      <div className="bg-violet-600 w-[50%] text-base flex flex-col justify-between items-center rounded-md h-100  relative">
        <div className="p-3">
          <div><h1 className="text-lg font-semibold font-sans">Section 1 : </h1>
            <p>Something one ewoksoe</p></div>
          <div className="w-full">
            <div className="w-full "></div>
            <div className="w-full "></div>
            <div className="w-full "></div>
            <div className="w-full "></div>
          </div>
        </div>
        <div className="absolute right-0 flex justify-center items-center h-full p-4"><span className=" hover:-rotate-180">▼</span></div>
      </div>
    </div>
  )
}

export default ModuleCard
