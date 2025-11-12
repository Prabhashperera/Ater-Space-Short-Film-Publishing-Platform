import React, { useState } from 'react';
import { Star, Plus, ChevronLeft, ChevronRight, Menu, X, Play, Info } from 'lucide-react';
import FilmCard from '../components/FilmCard';
import Header from '../components/Header';

const HomePage = () => {
    const [showUploadModal, setShowUploadModal] = useState(false);

    // Dummy film data
    // const bestRatedFilms = [
    //     { id: 1, title: "Echoes of Tomorrow", rating: 4.8, thumbnail: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=600&fit=crop" },
    //     { id: 2, title: "Silent Horizons", rating: 4.7, thumbnail: "https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=400&h=600&fit=crop" },
    //     { id: 3, title: "The Last Frame", rating: 4.9, thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=600&fit=crop" },
    //     { id: 4, title: "Midnight Canvas", rating: 4.6, thumbnail: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=600&fit=crop" },
    //     { id: 5, title: "Fragments", rating: 4.8, thumbnail: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=600&fit=crop" },
    //     { id: 6, title: "Urban Dreams", rating: 4.5, thumbnail: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400&h=600&fit=crop" },
    // ];

    // const newFilms = [
    //     { id: 7, title: "Dawn's Light", rating: 4.3, thumbnail: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=600&fit=crop" },
    //     { id: 8, title: "City Pulse", rating: 4.4, thumbnail: "https://images.unsplash.com/photo-1574267432644-f771a72b8695?w=400&h=600&fit=crop" },
    //     { id: 9, title: "Neon Nights", rating: 4.2, thumbnail: "https://images.unsplash.com/photo-1560109947-543149eceb16?w=400&h=600&fit=crop" },
    //     { id: 10, title: "River's Edge", rating: 4.5, thumbnail: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=400&h=600&fit=crop" },
    //     { id: 11, title: "Wavelength", rating: 4.1, thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=400&h=600&fit=crop" },
    //     { id: 12, title: "Ember", rating: 4.6, thumbnail: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=400&h=600&fit=crop" },
    // ];

    // const shortFilms = [
    //     { id: 13, title: "Five Minutes", rating: 4.4, thumbnail: "https://images.unsplash.com/photo-1512070679279-8988d32161be?w=400&h=600&fit=crop" },
    //     { id: 14, title: "The Wait", rating: 4.7, thumbnail: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?w=400&h=600&fit=crop" },
    //     { id: 15, title: "Solitude", rating: 4.3, thumbnail: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=400&h=600&fit=crop" },
    //     { id: 16, title: "Coffee Break", rating: 4.5, thumbnail: "https://images.unsplash.com/photo-1595769816263-9b910be24d5f?w=400&h=600&fit=crop" },
    //     { id: 17, title: "Brief Encounter", rating: 4.2, thumbnail: "https://images.unsplash.com/photo-1577915509670-25e4d93df374?w=400&h=600&fit=crop" },
    //     { id: 18, title: "Momentum", rating: 4.6, thumbnail: "https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?w=400&h=600&fit=crop" },
    // ];

    // const longFilms = [
    //     { id: 19, title: "The Journey Home", rating: 4.8, thumbnail: "https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?w=400&h=600&fit=crop" },
    //     { id: 20, title: "Chronicles", rating: 4.6, thumbnail: "https://images.unsplash.com/photo-1508712800480-297fa8a3ea43?w=400&h=600&fit=crop" },
    //     { id: 21, title: "Infinite Roads", rating: 4.7, thumbnail: "https://images.unsplash.com/photo-1514306191717-452ec28c7814?w=400&h=600&fit=crop" },
    //     { id: 22, title: "Beyond the Stars", rating: 4.9, thumbnail: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400&h=600&fit=crop" },
    //     { id: 23, title: "Legacy", rating: 4.5, thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop" },
    //     { id: 24, title: "The Odyssey", rating: 4.8, thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop" },
    // ];

    return (
        <div className="min-h-screen bg-black">
            {/* Header */}
            <Header />

            {/* Hero Section */}
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
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">විසල් ආදරේ</span>
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

            {/* Film Sections */}

            {/* Floating Upload Button */}
            <button
                onClick={() => setShowUploadModal(true)}
                className="fixed bottom-8 right-8 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white p-5 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 z-40 group"
            >
                <Plus className="w-7 h-7 group-hover:rotate-90 transition-transform duration-300" />
            </button>

            {/* Upload Modal */}
            {showUploadModal && (
                <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
                    <div className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl p-8 max-w-md w-full border border-white/10 shadow-2xl">
                        <h2 className="text-white text-3xl font-bold mb-3">Post Your Film</h2>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            Share your creative vision with the world. Upload feature coming soon – where every filmmaker's story matters.
                        </p>
                        <button
                            onClick={() => setShowUploadModal(false)}
                            className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white py-4 rounded-xl font-bold transition-all duration-200 hover:scale-105"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            {/* Footer */}
            <footer className="bg-black py-12 px-4 md:px-12 border-t border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="text-white text-xl font-bold">
                            ATER<span className="text-red-600">SPACE</span>
                        </div>
                        <div className="text-gray-500 text-sm">
                            © 2024 AterSpace. Empowering filmmakers worldwide.
                        </div>
                    </div>
                </div>
            </footer>

            <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
      `}</style>
        </div>
    );
};

export default HomePage;