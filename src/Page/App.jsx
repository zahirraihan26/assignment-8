import React, { useState, useEffect } from 'react';
import { Search, Compass } from 'lucide-react';
import useHooksData from '../Hooks/useHooksData';
import Card from '../Components/Card';
import Loading from '../Components/Loading';

const Apps = () => {
    const { appsCard, loadingCard } = useHooksData();
    const [searchapp, setSearchapp] = useState('');
    const [searchLoadingapp, setSearchLoadingapp] = useState(false);
    const [searchedAppsCord, setSearchedAppsCard] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = ['All', 'Text Generation', 'Image/Vision', 'Audio', 'Code'];

    useEffect(() => {
        setSearchedAppsCard(appsCard);
    }, [appsCard]);

    useEffect(() => {
        setSearchLoadingapp(true);
        const timer = setTimeout(() => {
            const term = searchapp.trim().toLowerCase();
            const filtered = appsCard.filter(app => {
                const matchesSearch = app.title.toLowerCase().includes(term);
                const matchesCategory = selectedCategory === 'All' || app.category === selectedCategory;
                return matchesSearch && matchesCategory;
            });
            setSearchedAppsCard(filtered);
            setSearchLoadingapp(false);
        }, 500);
        return () => clearTimeout(timer);
    }, [searchapp, appsCard, selectedCategory]);

    if (loadingCard) return <div className="flex justify-center mt-20"><Loading count={28} /></div>;

    return (
        <div className="relative min-h-screen pb-20">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-[rgba(139,92,246,0.1)] to-transparent pointer-events-none"></div>

            <div className='text-center pt-16 pb-12 px-4'>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-6 animate-float">
                    <Compass size={16} className="text-[#06b6d4]" />
                    <span className="text-sm font-medium text-gray-300">Explore the Ecosystem</span>
                </div>
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6'>
                    AI <span className="text-gradient">Models</span> Directory
                </h1>
                <p className='text-gray-400 text-lg md:text-xl max-w-2xl mx-auto'>
                    Discover, deploy, and scale with our comprehensive library of state-of-the-art AI models built for every use case.
                </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-10 px-4">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-6 py-2 rounded-full font-medium transition-all ${selectedCategory === cat
                                ? 'bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6] text-white shadow-[0_0_15px_rgba(6,182,212,0.4)] border-transparent'
                                : 'glass-panel bg-[rgba(255,255,255,0.05)] text-gray-300 border border-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.1)]'
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6 mb-12'>
                <div className="glass-panel px-6 py-3 rounded-2xl border border-[rgba(255,255,255,0.05)]">
                    <h2 className='text-xl font-semibold text-white'>
                        <span className="text-[#06b6d4] font-bold">{searchedAppsCord.length}</span> Models Available
                    </h2>
                </div>

                <div className="relative w-full md:w-96">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Search size={20} className="text-gray-400" />
                    </div>
                    <input
                        value={searchapp}
                        onChange={(e) => setSearchapp(e.target.value)}
                        type="text"
                        placeholder="Search models... (e.g. Vision, Text)"
                        className="w-full glass-panel bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-2xl py-4 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#8b5cf6] focus:ring-1 focus:ring-[#8b5cf6] transition-all"
                    />
                </div>
            </div>

            {searchLoadingapp ? (
                <div className="flex justify-center mt-10"><Loading count={12} /></div>
            ) : searchedAppsCord.length > 0 ? (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-6'>
                    {searchedAppsCord.map((app) => (
                        <div key={app.id} className="h-full">
                            <Card app={app} />
                        </div>
                    ))}
                </div>
            ) : (
                <div className='text-center mt-20 p-12 glass-panel max-w-2xl mx-auto rounded-3xl border border-[rgba(255,255,255,0.05)]'>
                    <div className='text-4xl font-bold text-white mb-4'>No Models Found</div>
                    <p className="text-gray-400 mb-8">We couldn't find any models matching your search criteria. Try a different term or browse our categories.</p>
                    <button
                        onClick={() => setSearchapp('')}
                        className='btn-ai px-8 py-3 rounded-xl font-medium'>
                        Clear Search
                    </button>
                </div>
            )}
        </div>
    );
};

export default Apps;
