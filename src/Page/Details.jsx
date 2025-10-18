
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router';
import useHooksData from '../Hooks/useHooksData';
import downloadImg from '../assets/icon-downloads.png';
import ratengsImg from '../assets/icon-ratings.png';
import reviewImg from '../assets/icon-review.png';
import errorImg from '../assets/App-Error.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Details = () => {
    const { id } = useParams();
    const { apps } = useHooksData();
    const app = apps?.find(a => String(a.id) === id);


    const [installed, setInstalled] = useState(false);


    useEffect(() => {
        if (!app) return;
        const existingList = JSON.parse(localStorage.getItem('Installed')) || [];
        const isInstalled = existingList.some(a => a.id === app.id);
        setInstalled(isInstalled);
    }, [app]);


    if (!app) {
        return (
            <div className="flex flex-col items-center justify-center h-[70vh] text-center">
                <img src={errorImg} alt="" />
                <h1 className='font-bold text-3xl md:text-4xl lg:text-5xl'>OPPS!! APP NOT FOUND</h1>
                <p className='text-gray-500 lg:text-xl py-2 md:py-3 lg:py-4'>The App you are requesting is not found on our system. Please try another app.</p>
                <Link to='/' className='btn bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] text-white font-semibold px-10'>Back to Home</Link>
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
        toast.success(`${app.title} installed successfully! ✅`);
    };


    return (
        <div className="w-11/12 lg:w-10/12 mx-auto my-10 md:my-15 lg:my-20">
            <div className="md:flex gap-0 md:gap-15 lg:gap-30">
                <div>
                    <img className="w-[350px] md:w-[250px] lg:w-[350px] h-[300px] md:h-[250px] lg:h-[350px] rounded-xl" src={image} alt={title} />
                </div>


                <div className="flex-1">
                    <h1 className="text-3xl font-bold">{title}</h1>
                    <h4 className="text-xl font-semibold">
                        Developed by{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
                            {companyName}
                        </span>
                    </h4>


                    <div className="border-t border-gray-200 flex my-5 lg:my-9.5"></div>


                    <div className="flex gap-15 md:gap-10 lg:gap-20">
                        <div>
                            <img className="w-8" src={downloadImg} alt="downloads" />
                            <p className="py-1">Downloads</p>
                            <h4 className="text-3xl md:text-2xl lg:text-3xl font-bold">{downloads}M</h4>
                        </div>
                        <div>
                            <img className="w-8" src={ratengsImg} alt="ratings" />
                            <p className="py-1">Average Ratings</p>
                            <h4 className="text-3xl md:text-2xl lg:text-3xl font-bold">{ratingAvg}</h4>
                        </div>
                        <div>
                            <img className="w-8" src={reviewImg} alt="reviews" />
                            <p className="py-1">Total Reviews</p>
                            <h4 className="text-3xl md:text-2xl lg:text-3xl font-bold">{reviews}k</h4>
                        </div>
                    </div>


                    <button
                        onClick={handleAddToInstallation}
                        disabled={installed}
                        className={`btn mt-5 text-xl font-medium ${installed ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#00d390] text-white'}`}
                    >
                        {installed ? 'Installed' : `Install Now (${size} Mb)`}
                    </button>
                </div>
            </div>


            <div className="border border-gray-300 my-8"></div>


            {/* Ratings Chart */}
            <div className="my-5 md:my-8 lg:my-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Ratings</h3>
                <div className="bg-base-100 border rounded-xl p-3 md:p-4 lg:p-6 h-80">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={ratings} margin={{ bottom: 5, top: 5, right: 30, left: 20  }}>
                            <CartesianGrid strokeDasharray="3 3" />

                            <XAxis dataKey="name" />


                            <YAxis />

                            <Tooltip />
                            <Legend />
                            <Bar dataKey="count" fill="#632EE3" radius={[20, 20, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>


            {/* Description */}
            <div>
                <div className="text-2xl md:text-3xl font-bold">Description</div>
                <div className="text-gray-600 mt-2 md:mt-3 lg:mt-5">{description}</div>
            </div>


            <ToastContainer />
        </div>
    );
};


export default Details;



