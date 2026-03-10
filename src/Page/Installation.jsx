


import React, { useEffect, useState } from 'react';
import { Download, Star, Database, Trash2, Cpu } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Installation = () => {
  const [installation, setInstallation] = useState([]);
  const [sortOrderValue, setSortOrderValue] = useState('none');

  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem('Installed')) || [];
    setInstallation(savedList);
  }, []);

  const sortedItems = (() => {
    if (sortOrderValue === 'downloads-asc') {
      return [...installation].sort((a, b) => a.downloads - b.downloads);
    } else if (sortOrderValue === 'downloads-desc') {
      return [...installation].sort((a, b) => b.downloads - a.downloads);
    } else {
      return installation;
    }
  })();

  const handleRemove = (id) => {
    const eList = JSON.parse(localStorage.getItem('Installed')) || [];
    const removedApp = eList.find((a) => a.id === id);
    const updatList = eList.filter((a) => a.id !== id);

    localStorage.setItem('Installed', JSON.stringify(updatList));
    setInstallation(updatList);
    toast.error(`${removedApp?.title} removed from workspace.`, {
      theme: 'dark',
      style: { background: 'rgba(15,17,26,0.9)', border: '1px solid rgba(239,68,68,0.3)', color: '#fff' }
    });
  };

  return (
    <div className="w-11/12 max-w-7xl mx-auto my-12 md:my-16 lg:my-24 min-h-[60vh]">
      <div className="flex flex-col md:flex-row justify-between items-end border-b border-[rgba(255,255,255,0.05)] pb-8 mb-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[rgba(6,182,212,0.1)] border border-[rgba(6,182,212,0.2)] mb-4">
            <Database size={14} className="text-[#06b6d4]" />
            <span className="text-sm font-medium text-[#06b6d4]">Local Workspace</span>
          </div>
          <h1 className="font-extrabold text-4xl md:text-5xl text-white mb-3">
            Deployed Models
          </h1>
          <p className="text-gray-400 text-lg">
            Manage your active  models and infrastructure.
          </p>
        </div>

        <div className="mt-6 md:mt-0 flex items-center gap-4">
          <div className="glass-panel px-4 py-2 rounded-xl text-gray-300 font-medium border border-[rgba(255,255,255,0.05)]">
            <span className="text-[#8b5cf6] font-bold">{installation.length}</span> Active
          </div>

          <div className="glass-panel rounded-xl border border-[rgba(255,255,255,0.05)] relative">
            <select
              className="appearance-none bg-transparent text-white font-medium pl-4 pr-10 py-2 outline-none cursor-pointer"
              value={sortOrderValue}
              onChange={(e) => setSortOrderValue(e.target.value)}
            >
              <option value="none" className="bg-[#0f111a] text-white">Default Sort</option>
              <option value="downloads-asc" className="bg-[#0f111a] text-white">Deployments: Low → High</option>
              <option value="downloads-desc" className="bg-[#0f111a] text-white">Deployments: High → Low</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-gray-400">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        {sortedItems.length > 0 ? (
          sortedItems.map((a) => (
            <div
              key={a.id}
              className="glass-panel group rounded-2xl p-4 md:p-6 lg:p-8 flex flex-col md:flex-row justify-between items-center transition-all hover:border-[rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.1)] border border-[rgba(255,255,255,0.05)] relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#8b5cf6] to-[#06b6d4] opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="flex flex-col sm:flex-row gap-6 lg:gap-8 items-center md:items-start w-full md:w-auto">
                <div className="w-full sm:w-48 aspect-video rounded-xl overflow-hidden bg-[rgba(0,0,0,0.3)] border border-[rgba(255,255,255,0.05)] flex-shrink-0 relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#8b5cf6] to-[#06b6d4] opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10"></div>
                  <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={a.image} alt={a.title} />
                </div>

                <div className="text-center sm:text-left flex-1 min-w-0">
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.05)] mb-3">
                    <Cpu size={12} className="text-gray-400" />
                    <span className="text-xs font-medium text-gray-400">Running</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 truncate">
                    {a.title}
                  </h3>

                  <div className="flex flex-wrap justify-center sm:justify-start gap-4 text-sm">
                    <div className="flex gap-2 items-center bg-[rgba(6,182,212,0.1)] px-3 py-1.5 rounded-lg border border-[rgba(6,182,212,0.2)]">
                      <Download size={14} className="text-[#06b6d4]" />
                      <span className="text-white font-medium">{a.downloads}M</span>
                    </div>
                    <div className="flex gap-2 items-center bg-[rgba(245,158,11,0.1)] px-3 py-1.5 rounded-lg border border-[rgba(245,158,11,0.2)]">
                      <Star size={14} className="text-[#f59e0b]" />
                      <span className="text-white font-medium">{a.ratingAvg}</span>
                    </div>
                    <div className="flex gap-2 items-center bg-[rgba(255,255,255,0.05)] px-3 py-1.5 rounded-lg border border-[rgba(255,255,255,0.1)]">
                      <Database size={14} className="text-gray-400" />
                      <span className="text-gray-300 font-medium">{a.size}MB</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 md:mt-0 flex items-center justify-end w-full md:w-auto">
                <button
                  onClick={() => handleRemove(a.id)}
                  className="flex items-center gap-2 bg-[rgba(239,68,68,0.1)] hover:bg-[rgba(239,68,68,0.2)] hover:shadow-[0_0_15px_rgba(239,68,68,0.3)] text-red-500 border border-[rgba(239,68,68,0.2)] px-6 py-3 rounded-xl transition-all w-full md:w-auto justify-center font-medium"
                >
                  <Trash2 size={18} />
                  <span>Uninstall</span>
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="glass-panel rounded-3xl p-16 flex flex-col items-center justify-center text-center border border-[rgba(255,255,255,0.05)]">
            <div className="w-20 h-20 rounded-full bg-[rgba(255,255,255,0.05)] flex items-center justify-center mb-6 border border-[rgba(255,255,255,0.05)]">
              <Database size={32} className="text-gray-500" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">No Models Deployed</h3>
            <p className="text-gray-400 max-w-md mx-auto">
              Your workspace is currently empty. Explore the directory and deploy state-of-the-art models to get started.
            </p>
          </div>
        )}
      </div>

      <ToastContainer />
    </div>
  );
};

export default Installation;
