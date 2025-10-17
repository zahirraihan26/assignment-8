import React from 'react';
import { Link } from 'react-router';

import AppStore from '../assets/Group.png';
import heroImg from '../assets/hero.png';

const Home = () => {
  return (
    <div>
      <div className='text-center mt-20'>
        <h1 className='font-bold text-7xl'>
          We Build <br />
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'>
            Productive
          </span>{' '}
          Apps
        </h1>

        <p className='text-gray-600 my-8'>
          At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.
          <br />
          Our goal is to turn your ideas into digital experiences that truly make an impact.
        </p>

        <div className='flex items-center justify-center my-8 gap-5'>
          <Link
            className='flex items-center gap-2.5 btn'
            to='https://play.google.com/store/games?hl=en'
          >
            <img src={playStore} alt='Google Play' /> Google Play
          </Link>
          <Link className='flex items-center gap-2.5 btn' to=''>
            <img src={AppStore} alt='App Store' /> App Store
          </Link>
        </div>
      </div>

      <div className='flex items-center justify-center mt-10'>
        <img src={heroImg} alt='Hero' />
      </div>

      <div className='bg-gradient-to-br from-[#632EE3] to-[#9F62F2] py-20'>
        <h1 className='text-white font-bold text-6xl text-center'>
          Trusted by Millions, Built for You
        </h1>

        <div className='flex gap-20 justify-center mt-16'>
          <div className='text-white'>
            <h4 className='mb-2.5'>Total Downloads</h4>
            <span className='font-bold text-6xl'>29.6M</span>
            <p className='mt-2.5'>21% more than last month</p>
          </div>

          <div className='text-white'>
            <h4 className='mb-2.5'>Total Reviews</h4>
            <span className='font-bold text-6xl'>906K</span>
            <p className='mt-2.5'>46% more than last month</p>
          </div>

          <div className='text-white'>
            <h4 className='mb-2.5'>Active Apps</h4>
            <span className='font-bold text-6xl'>132+</span>
            <p className='mt-2.5'>31 more will Launch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
