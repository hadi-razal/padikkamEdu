"use client";
import React from "react";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-purple-950 to-indigo-900 overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4">
        <div className="text-center space-y-6">
          {/* Title with subtle animation */}
          <h1 className="text-5xl md:text-7xl font-bold text-white animate-fade-in">
            Padikkam<span className="text-blue-400">.com</span>
          </h1>

          {/* Coming soon badge */}
          <div className="inline-block bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full animate-pulse">
            <h2 className="text-xl md:text-2xl text-blue-200 font-medium">
              Coming Soon
            </h2>
          </div>

          {/* Optional tagline */}
          <p className="text-blue-200/80 text-lg md:text-xl max-w-md mx-auto">
            Your journey to knowledge begins here
          </p>
        </div>
      </div>
    </div>
  );
}
