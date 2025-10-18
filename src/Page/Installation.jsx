




import React, { useEffect, useState } from 'react';
import downloadImg from '../assets/icon-downloads.png';
import ratingsImg from '../assets/icon-ratings.png';
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
    toast.success(`${removedApp?.title} Uninstall Successfully! ✅`);
  };

  return (
    <div className="w-11/12 my-10 md:my-15 lg:my-20 mx-auto">
      <div>
        <div className="text-center my-5 md:my-7 lg:my-9">
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl">
            Your Installed Apps
          </h1>
          <p className="text-gray-400 mt-3 text-xl">
            Explore all trending apps installed by you
          </p>
        </div>

        <div className="flex justify-between items-center">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">
            ({installation.length}) Apps Found
          </h2>

          <label className="bg-gray-500 text-white rounded-2xl p-1 md:p-3">
            <select
              className="bg-gray-500 text-white outline-none"
              value={sortOrderValue}
              onChange={(e) => setSortOrderValue(e.target.value)}
            >
              <option value="none">Sort By Downloads</option>
              <option value="downloads-asc">Low → High</option>
              <option value="downloads-desc">High → Low</option>
            </select>
          </label>
        </div>
      </div>

      <div className="my-5">
        {sortedItems.length > 0 ? (
          sortedItems.map((a) => (
            <div
              key={a.id}
              className="bg-base-100 my-5 md:my-8 lg:my-10 shadow-sm border rounded-2xl border-gray-200 p-2 md:p-6 lg:p-8 md:flex justify-between items-center"
            >
              <div className="flex gap-4 md:gap-6 lg:gap-8 items-center">
                <div>
                  <img className="w-[200px] rounded-2xl" src={a.image} alt="" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4 md:mb-6 lg:mb-8">
                    {a.title}
                  </h3>
                  <div className="flex gap-5 items-center">
                    <div className="flex gap-2 text-xl font-semibold items-center">
                      <img className="h-6" src={downloadImg} alt="" />
                      <span className="text-[#00D390]">{a.downloads}M</span>
                    </div>
                    <div className="flex gap-2 text-xl font-semibold items-center">
                      <img className="h-6" src={ratingsImg} alt="" />
                      <span className="text-orange-400">{a.ratingAvg}</span>
                    </div>
                    <div className="flex gap-2 text-xl font-semibold">
                      <span>{a.reviews}MB</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex mt-3 md:mt-0 items-center justify-center">
                <button
                  onClick={() => handleRemove(a.id)}
                  className="bg-[#00d390] hover:bg-[#00b87d] text-white px-5 md:px-7 lg:px-10 py-2 md:py-3 rounded-xl transition-all"
                >
                  Uninstall
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 text-xl mt-10">
            No apps installed yet.
          </p>
        )}
      </div>

      <ToastContainer />
    </div>
  );
};

export default Installation;

