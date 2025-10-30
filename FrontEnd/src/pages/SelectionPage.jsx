
function SelectionPage() {
    return (
        <>
            <div className="relative w-full h-screen overflow-hidden">
                <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }

        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .float-animation {
          animation: float 6s ease-in-out infinite;
        }

        .glow-animation {
          animation: glow 3s ease-in-out infinite;
        }

        .gradient-bg {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%);
          background-size: 400% 400%;
          animation: gradient 15s ease infinite;
        }

        .btn-shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          background-size: 200% 100%;
          animation: shimmer 3s infinite;
        }

        .glass-effect {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .film-strip {
          position: absolute;
          width: 100%;
          height: 4px;
          background: repeating-linear-gradient(
            90deg,
            #fff 0px,
            #fff 20px,
            transparent 20px,
            transparent 40px
          );
          opacity: 0.1;
        }

        .grain {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          opacity: 0.03;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }
      `}</style>

                <div className="grain"></div>

                {/* Animated gradient background */}
                <div className="gradient-bg fixed inset-0 opacity-20"></div>

                {/* Main dark background */}
                <div className="fixed inset-0 bg-gray-950"></div>

                {/* Floating orbs */}
                <div className="fixed top-20 left-20 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl opacity-20 float-animation" style={{ animationDelay: '0s' }}></div>
                <div className="fixed bottom-20 right-20 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-20 float-animation" style={{ animationDelay: '2s' }}></div>
                <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-600 rounded-full filter blur-3xl opacity-10 float-animation" style={{ animationDelay: '4s' }}></div>

                {/* Film strips decoration */}
                <div className="film-strip" style={{ top: '20%' }}></div>
                <div className="film-strip" style={{ bottom: '20%' }}></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8">
                    {/* Title */}
                    <div className="text-center mb-16 float-animation">
                        <h1 className="text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                            Film Portal
                        </h1>
                        <p className="text-gray-400 text-xl tracking-wider">Your Gateway to Cinematic Excellence</p>
                        <div className="flex items-center justify-center gap-2 mt-4">
                            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
                            <div className="w-2 h-2 rounded-full bg-purple-500 glow-animation"></div>
                            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
                        </div>
                    </div>

                    {/* Buttons Container */}
                    <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
                        {/* Explore Films Button */}
                        <div className="group relative">
                            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-500 glow-animation"></div>
                            <button
                                onClick={() => console.log('Explore Films clicked')}
                                className="cursor-pointer relative glass-effect px-12 py-6 rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 active:scale-95"
                            >
                                <div className="absolute inset-0 btn-shimmer"></div>
                                <div className="relative flex items-center gap-4">
                                    <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                    </svg>
                                    <div className="text-left">
                                        <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                            Explore Films
                                        </div>
                                        <div className="text-sm text-gray-400 mt-1">Discover amazing content</div>
                                    </div>
                                </div>
                            </button>
                        </div>

                        {/* Publish Films Button */}
                        <div className="group relative">
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-500 glow-animation" style={{ animationDelay: '1.5s' }}></div>
                            <button
                                onClick={() => console.log('Publish Films clicked')}
                                className="cursor-pointer relative glass-effect px-12 py-6 rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 active:scale-95"
                            >
                                <div className="absolute inset-0 btn-shimmer" style={{ animationDelay: '1s' }}></div>
                                <div className="relative flex items-center gap-4">
                                    <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                                    </svg>
                                    <div className="text-left">
                                        <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                            Publish Films
                                        </div>
                                        <div className="text-sm text-gray-400 mt-1">Share your masterpiece</div>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>

                    {/* Bottom decoration */}
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
                        <div className="w-2 h-2 rounded-full bg-purple-500 opacity-50"></div>
                        <div className="w-2 h-2 rounded-full bg-pink-500 opacity-50"></div>
                        <div className="w-2 h-2 rounded-full bg-blue-500 opacity-50"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SelectionPage