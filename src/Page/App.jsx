
import React, { useState, useEffect } from 'react';
import useHooksData from '../Hooks/useHooksData';
import Card from '../Components/Card';
import Loading from '../Components/Loading';

const Apps = () => {
    const { apps, loading } = useHooksData();
    const [search, setSearch] = useState('');
    const [searchLoading, setSearchLoading] = useState(false);
    const [searchedApps, setSearchedApps] = useState([]);

    useEffect(() => {
        setSearchedApps(apps);
    }, [apps]);

    useEffect(() => {
        if (search.trim()) {
            setSearchLoading(true);
            const timer = setTimeout(() => {
                const term = search.trim().toLowerCase();
                const filtered = apps.filter(app =>
                    app.title.toLowerCase().includes(term)
                );
                setSearchedApps(filtered);
                setSearchLoading(false);
            }, 500);
            return () => clearTimeout(timer);
        } else {
            setSearchedApps(apps);
            setSearchLoading(false);
        }
    }, [search, apps]);

    if (loading) return <Loading count={28} />;

    return (
        <div>
            <div className='text-center my-8 md:my-12 lg:my-16'>
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold'>Our All Applications</h1>
                <p className='text-gray-400 font-medium mt-5'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>

            <div className='flex justify-between items-center w-11/12 mx-auto'>
                <h2 className='text-2xl font-semibold'>({searchedApps.length}) Apps Found</h2>
                <label className="input">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input 
                        value={search}
                        onChange={(e) => setSearch(e.target.value)} 
                        type="search" 
                        required 
                        placeholder="Search" 
                    />
                </label>
            </div>

            {searchLoading ? (
                <Loading count={12} />
            ) : searchedApps.length > 0 ? (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-11/12 mx-auto gap-6 my-16'>
                    {searchedApps.map((app) => (
                        <Card key={app.id} app={app} />
                    ))}
                </div>
            ) : (
                <div className='text-center my-16'>
                    <div className='text-6xl font-bold'>No Apps Found</div>
                    <button
                        onClick={() => setSearch('')}
                        className='btn text-white px-8 mt-10 bg-gradient-to-tr from-[#632EE3] to-[#9F62F2]'>
                        Show All
                    </button>
                </div>
            )}
        </div>
    );
};

export default Apps;
