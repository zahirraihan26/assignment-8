
import React from 'react';
import downloadImg from '../assets/icon-downloads.png'
import ratingAvgImg from '../assets/icon-ratings.png'
import { Link } from 'react-router';
import { Download, Star } from 'lucide-react';

const Card = ({ app }) => {
  const { id, image, title, downloads, ratingAvg } = app;

  return (
    <Link to={`/app/${id}`} className="block h-full cursor-pointer">
      <div className="glass-panel h-full rounded-2xl p-5 border border-[rgba(255,255,255,0.05)] hover:border-[#8b5cf6] hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:-translate-y-2 transition-all duration-300 flex flex-col group relative overflow-hidden">
        {/* Subtle top glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-transparent via-[#8b5cf6] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

        <figure className="relative mb-4 bg-[rgba(0,0,0,0.3)] rounded-xl overflow-hidden aspect-video flex-shrink-0">
          <img
            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-transform duration-500"
            src={image}
            alt={title}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090a0f] to-transparent opacity-60"></div>
        </figure>

        <div className="flex-1 flex flex-col justify-between">
          <h2 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#06b6d4] transition-all">
            {title}
          </h2>

          <div className="flex justify-between mt-auto">
            <div className="flex justify-center items-center gap-2 text-[#06b6d4] font-medium px-3 py-1.5 rounded-lg bg-[rgba(6,182,212,0.1)] border border-[rgba(6,182,212,0.2)]">
              <Download size={16} /> <span className="text-sm">{downloads}M</span>
            </div>
            <div className="flex justify-center items-center gap-2 font-medium text-[#f59e0b] px-3 py-1.5 rounded-lg bg-[rgba(245,158,11,0.1)] border border-[rgba(245,158,11,0.2)]">
              <Star size={16} className="fill-[#f59e0b]" /> <span className="text-sm">{ratingAvg}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
