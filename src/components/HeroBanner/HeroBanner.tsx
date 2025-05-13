import React from 'react';
import Link from 'next/link';

const HeroBanner = () => {
  return (
    <section 
      className="min-h-[calc(100vh-80px)] flex items-center justify-center text-center p-4 bg-dark-bg relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(18,18,18,0.6), rgba(18,18,18,1)), url('/placeholder-cyberpunk-bg.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="z-10 animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-brand-cyan animate-pulse-slow">
          Unlock Your Audio Identity
        </h1>
        <p className="text-xl md:text-2xl mb-10 text-light-text max-w-3xl mx-auto">
          Experience sound like never before. EarPrint crafts a unique audio profile tailored precisely to your hearing.
        </p>
        <Link href="/create-earprint" className="bg-brand-purple hover:bg-brand-pink text-white font-bold py-4 px-10 rounded-lg text-lg transition-all duration-300 ease-in-out shadow-lg hover:shadow-brand-pink/50 transform hover:scale-105">
          Create Your EarPrint
        </Link>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-dark-bg to-transparent"></div>
    </section>
  );
};

export default HeroBanner;

