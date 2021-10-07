
const Loading = () => {
  return (
    <div className=" flex flex-col justify-center items-center py-20">
    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-700"></div>
   <div className='text-2xl font-semibold text-gray-700 pt-4 '>
     <span className=''>Loading</span>
     <span className='animate-pulse  pl-1'>...</span>
   </div>
  </div>
  );
};

export default Loading;
