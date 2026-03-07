import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router';
import useHooksData from '../Hooks/useHooksData';
import { Download, Star, MessageSquare, AlertCircle, Cpu } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Details = () => {
  const { id } = useParams();
  const { appsCard } = useHooksData();
  const app = appsCard?.find(a => String(a.id) === id);

  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    if (!app) return;
    const existingList = JSON.parse(localStorage.getItem('Installed')) || [];
    const isInstalled = existingList.some(a => a.id === app.id);
    setInstalled(isInstalled);
  }, [app]);

  if (!app) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-red-500 rounded-full blur-[150px] opacity-10 pointer-events-none"></div>
        <AlertCircle size={80} className="text-red-500 mb-6" />
        <h1 className='font-extrabold text-4xl md:text-5xl lg:text-6xl text-white mb-4'>MODEL NOT FOUND</h1>
        <p className='text-gray-400 text-lg md:text-xl max-w-lg mx-auto mb-8'>The AI Model you are requesting is not available in our current directory. Please explore other models.</p>
        <Link to='/apps' className='btn-ai px-10 py-4 h-auto rounded-xl text-lg font-medium'>Explore Directory</Link>
      </div>
    );
  }

  const { title, image, ratingAvg, downloads, reviews, companyName, size, description, ratings } = app;

  const handleAddToInstallation = () => {
    const existingList = JSON.parse(localStorage.getItem('Installed')) || [];
    const isDuplicate = existingList.some(a => a.id === app.id);
    if (isDuplicate) return;

    const updatedList = [...existingList, app];
    localStorage.setItem('Installed', JSON.stringify(updatedList));
    setInstalled(true);
    toast.success(`${title} deployed successfully! ⚡`, {
      theme: 'dark',
      style: { background: 'rgba(15,17,26,0.9)', border: '1px solid rgba(139,92,246,0.3)', color: '#fff' }
    });
  };

  return (
    <div className="w-11/12 max-w-7xl mx-auto my-12 md:my-16 lg:my-24 relative">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
        {/* Image/Icon Panel */}
        <div className="w-full lg:w-1/3 flex justify-center lg:justify-start">
          <div className="glass-panel p-4 rounded-3xl border border-[rgba(255,255,255,0.05)] w-full max-w-sm relative group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#8b5cf6] to-[#06b6d4] opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
            <img className="w-full aspect-square object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500 relative z-10" src={image} alt={title} />
          </div>
        </div>

        {/* Details Panel */}
        <div className="flex-1 w-full">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[rgba(139,92,246,0.1)] border border-[rgba(139,92,246,0.2)] mb-4">
            <Cpu size={14} className="text-[#8b5cf6]" />
            <span className="text-sm font-medium text-[#8b5cf6]">Hero-Pro Infrastructure</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2">{title}</h1>
          <h4 className="text-xl font-medium text-gray-400 mb-8">
            Engineered by{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6] font-bold">
              {companyName}
            </span>
          </h4>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4 mb-10">
            <div className="glass-panel p-4 rounded-2xl flex flex-col items-center justify-center text-center">
              <Download size={24} className="text-[#06b6d4] mb-2" />
              <p className="text-gray-400 text-sm mb-1 uppercase tracking-wider font-semibold">Deployments</p>
              <h4 className="text-2xl font-bold text-white">{downloads}M</h4>
            </div>
            <div className="glass-panel p-4 rounded-2xl flex flex-col items-center justify-center text-center">
              <Star size={24} className="text-[#f59e0b] mb-2" />
              <p className="text-gray-400 text-sm mb-1 uppercase tracking-wider font-semibold">Rating</p>
              <h4 className="text-2xl font-bold text-white">{ratingAvg}</h4>
            </div>
            <div className="glass-panel p-4 rounded-2xl flex flex-col items-center justify-center text-center">
              <MessageSquare size={24} className="text-[#8b5cf6] mb-2" />
              <p className="text-gray-400 text-sm mb-1 uppercase tracking-wider font-semibold">Reviews</p>
              <h4 className="text-2xl font-bold text-white">{reviews}k</h4>
            </div>
          </div>

          <button
            onClick={handleAddToInstallation}
            disabled={installed}
            className={`w-full md:w-auto px-10 py-4 rounded-xl text-lg font-bold transition-all ${installed
                ? 'bg-[rgba(255,255,255,0.05)] text-gray-500 border border-[rgba(255,255,255,0.1)] cursor-not-allowed'
                : 'btn-ai shadow-[0_0_20px_rgba(139,92,246,0.4)]'
              }`}
          >
            {installed ? 'Deployed Successfully' : `Deploy Model to Workspace (${size} Mb)`}
          </button>
        </div>
      </div>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.1)] to-transparent my-16"></div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Description */}
        <div className="flex-1 lg:w-1/2">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-[rgba(6,182,212,0.1)] flex items-center justify-center border border-[rgba(6,182,212,0.2)]">
              <MessageSquare size={20} className="text-[#06b6d4]" />
            </div>
            <h3 className="text-3xl font-bold text-white">Model Overview</h3>
          </div>
          <div className="glass-panel p-8 rounded-3xl text-gray-300 leading-relaxed text-lg border border-[rgba(255,255,255,0.05)]">
            {description}
          </div>
        </div>

        {/* Ratings Chart */}
        <div className="flex-1 lg:w-1/2">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-[rgba(139,92,246,0.1)] flex items-center justify-center border border-[rgba(139,92,246,0.2)]">
              <Star size={20} className="text-[#8b5cf6]" />
            </div>
            <h3 className="text-3xl font-bold text-white">Performance Metrics</h3>
          </div>

          <div className="glass-panel p-6 rounded-3xl h-[400px] border border-[rgba(255,255,255,0.05)] flex items-center justify-center">
            <ResponsiveContainer width="100%" height="90%">
              <BarChart
                layout="vertical"
                data={ratings}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" horizontal={false} />
                <XAxis type="number" stroke="#9ca3af" tick={{ fill: '#9ca3af' }} />
                <YAxis type="category" dataKey="name" stroke="#9ca3af" tick={{ fill: '#9ca3af' }} width={80} />
                <Tooltip
                  cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                  contentStyle={{ backgroundColor: 'rgba(15,17,26,0.9)', border: '1px solid rgba(139,92,246,0.3)', borderRadius: '12px', color: '#fff' }}
                />
                <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px' }} />
                <Bar dataKey="count" name="User Ratings" fill="url(#colorUv)" radius={[0, 6, 6, 0]} barSize={24} />
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#8b5cf6" stopOpacity={0.8} />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity={1} />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Details;
