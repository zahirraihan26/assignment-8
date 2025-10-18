
import React from 'react';


const Loading = ({ count = 8 }) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-11/12 mx-auto gap-6 my-6 md:my-10 lg:my-16'>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="flex w-full flex-col gap-4">
          <div className="skeleton h-64 w-full"></div> {/* image skeleton */}
          <div className="skeleton h-4 w-full"></div>  {/* title skeleton */}
          <div className='flex justify-center gap-4'>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-28"></div>
          </div>
        </div>
      ))}
    </div>
  );
};


export default Loading;

