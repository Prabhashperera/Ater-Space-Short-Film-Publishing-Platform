import React from 'react'
import { Star, Plus, ChevronLeft, ChevronRight, Menu, X, Play, Info } from 'lucide-react';


function Hero() {
    return (
        <>
            <div className="relative h-screen overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img
                        src="https://image.tmdb.org/t/p/original/qn7GWOvzTl9w7bUMSEpue9WzkkB.jpg"
                        alt="Hero"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-r from-black via-black/70 to-transparent"></div>
                    <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent"></div>
                </div>

                {/* Hero Content */}
                <div className="relative h-full flex items-center px-4 md:px-12">
                    <div className="max-w-2xl pt-20">
                        <div className="inline-block bg-red-600/20 backdrop-blur-sm border border-red-600/50 rounded-full px-4 py-2 mb-6">
                            <span className="text-red-500 text-xs md:text-sm font-semibold uppercase tracking-wider">Featured Film</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-white mb-4 leading-tight tracking-tight">
                            Visal Adare
                            <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-red-500 to-red-700">විසල් ආදරේ</span>
                        </h1>
                        <p className="text-gray-300 text-base md:text-lg mb-8 leading-relaxed max-w-xl">
                            Be captivated by the mesmerizing story of Thaadi, Shavin, Sarah and Anud; as their destinies intertwine in a tale that will stay with you long after the credits roll.
                        </p>
                        <div className="flex items-center gap-4 mb-8">
                            <div className="flex items-center gap-2">
                                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                <span className="text-white font-bold text-lg">8.8</span>
                                <span className="text-gray-400 text-sm">Rating</span>
                            </div>
                            <div className="h-6 w-px bg-gray-700"></div>
                            <span className="text-gray-300 text-sm">2024 • Romantic • 128 min</span>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="flex items-center justify-center gap-3 bg-white hover:bg-gray-200 text-black font-bold px-8 py-4 rounded-lg transition-all duration-200 hover:scale-105">
                                <Play className="w-5 h-5 fill-black" />
                                Watch Now
                            </button>
                            <button className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-lg border border-white/20 transition-all duration-200 hover:scale-105">
                                <Info className="w-5 h-5" />
                                More Info
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero