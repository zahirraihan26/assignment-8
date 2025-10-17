


import React from 'react';
import downloadImg from '../assets/icon-downloads.png'
import ratingAvgImg from '../assets/icon-ratings.png'
import { Link } from 'react-router';


const Card = ({app}) => {
    const { id, image , title  , downloads, ratingAvg} = app
   
    return (
      <Link to={`/app/${id}`}
     
      className="card bg-base-100 shadow-sm hover:scale-105 transition border border-gray-200 ease-in-out">
  <figure>
    <img className='h-70 w-full p-4 rounded-4xl'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
   
    <div className='flex justify-between'>
      <h5 className='flex justify-center items-center gap-2 text-[#00D390] font-semibold px-4  rounded-3xl bg-[#F1F5E8]'> <img className='w-4' src={downloadImg} alt="" /> {downloads}M</h5>
      <h5 className='flex justify-center items-center gap-2 font-semibold text-[#FF8811] px-4  rounded-3xl bg-amber-50'><img className='w-4' src={ratingAvgImg} alt="" /> {ratingAvg}</h5>
    </div>
  </div>
</Link>
    );
};


export default Card;

