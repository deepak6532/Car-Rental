
import React from 'react';
import banner from '../assets/banner.jpg';
import playstore from '../assets/playstore.png';
import appstore from '../assets/appstore.png';

const AppStoreBanner = () => {
  return (
    <div className="w-full px-4 pb-14">
      <div
        className="rounded-xl bg-cover bg-center bg-no-repeat min-h-[400px] flex items-center justify-center w-full max-w-7xl mx-auto"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <div className="space-y-6 px-4 text-center max-w-xl">
          <h1 className="text-2xl sm:text-4xl font-semibold font-serif text-black drop-shadow">
            Get Started with our app
          </h1>
          <p className="text-black sm:px-8">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem minima corrupti non.
          </p>

          <div className="flex justify-center items-center gap-4">
            <a href="#">
              <img
                src={playstore}
                alt="Play Store"
                className="max-w-[120px] sm:max-w-[150px] md:max-w-[180px] hover:scale-105 duration-300"
              />
            </a>
            <a href="#">
              <img
                src={appstore}
                alt="App Store"
                className="max-w-[120px] sm:max-w-[150px] md:max-w-[180px] hover:scale-105 duration-300"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppStoreBanner;
