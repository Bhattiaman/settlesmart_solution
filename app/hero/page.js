"use client";

import React from "react";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();

  const JusticeScale = () => (
    <svg width="100%" height="100%" viewBox="0 0 500 400" fill="none">
      <path d="M100 300L400 300" stroke="#1a3e72" strokeWidth="3" strokeLinecap="round" />
      <path d="M250 300L250 180" stroke="#1a3e72" strokeWidth="3" strokeLinecap="round" />
      <rect x="220" y="180" width="60" height="10" rx="2" fill="#1a3e72" />
      <circle cx="200" cy="220" r="25" fill="#1a3e72" fillOpacity="0.8" />
      <circle cx="300" cy="220" r="25" fill="#1a3e72" fillOpacity="0.8" />
      <path d="M150 220C150 220 170 200 180 220C190 240 170 250 150 240" fill="#1a3e72" />
      <circle cx="170" cy="190" r="15" fill="#1a3e72" />
      <path d="M350 220C350 220 330 200 320 220C310 240 330 250 350 240" fill="#1a3e72" />
      <circle cx="330" cy="190" r="15" fill="#1a3e72" />
      <rect x="180" y="150" width="40" height="50" rx="2" fill="white" stroke="#1a3e72" />
      <rect x="280" y="150" width="40" height="50" rx="2" fill="white" stroke="#1a3e72" />
      <path d="M185 160H215M185 170H205M185 180H195" stroke="#1a3e72" strokeWidth="1.5" />
      <path d="M285 160H315M285 170H305M285 180H295" stroke="#1a3e72" strokeWidth="1.5" />
    </svg>
  );

  return (
    <div className="relative bg-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/justice-india-light.jpg"
          alt="Indian Justice System"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-center">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <div className="inline-flex items-center bg-[#1a3e72]/10 px-4 py-2 rounded-full mb-4">
            <span className="text-[#1a3e72] font-medium">
              🚀 80% Faster Resolution Than Courts
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1a3e72] leading-tight">
            Smart Legal Solutions <br />
            <span className="text-blue-600">Without Court Hassles</span>
          </h1>

          <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-2xl">
            SettleSmart provides expert mediation and arbitration services that save you time and money.
            Resolve disputes in weeks, not years, with our network of retired judges and legal experts.
          </p>

          {/* Key Benefits Grid */}
          <div className="mt-8 grid grid-cols-2 gap-4 max-w-md mx-auto md:mx-0">
            {[
              { icon: "⚖️", text: "Legally Binding" },
              { icon: "💰", text: "1/3 Court Cost" },
              { icon: "⏱️", text: "90% Faster" },
              { icon: "🔒", text: "Confidential" },
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-2 bg-white/50 p-2 rounded-lg">
                <span className="text-xl">{item.icon}</span>
                <span className="font-medium text-gray-800">{item.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button
              onClick={() => router.push("/schedule")}
              className="bg-[#1a3e72] hover:bg-[#0d2b56] text-white px-6 py-3 rounded-md font-semibold shadow-lg transition flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              Free 30-Min Consultation
            </button>
            <button
              onClick={() => router.push("/how-it-works")}
              className="border border-[#1a3e72] text-[#1a3e72] hover:bg-gray-100 px-6 py-3 rounded-md font-semibold transition flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              How It Works
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-2">4.9/5 (127 Reviews)</span>
            </div>
            <div className="hidden sm:block">•</div>
            <div>Trusted by 500+ Clients</div>
          </div>
        </div>

        {/* SVG Illustration */}
        <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
          <div className="relative w-full max-w-lg">
            <JusticeScale />

            <div className="absolute -bottom-5 -left-5 bg-white shadow-lg rounded-full px-4 py-2 flex items-center">
              <div className="bg-green-500 rounded-full p-1 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-sm font-medium">Legally Binding</span>
            </div>

            <div className="absolute -top-5 -right-5 bg-white shadow-lg rounded-full px-4 py-2 flex items-center">
              <div className="bg-blue-500 rounded-full p-1 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-sm font-medium">90% Success Rate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
