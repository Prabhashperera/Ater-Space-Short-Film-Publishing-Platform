import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 bg-linear-to-b from-black via-black/80 to-transparent backdrop-blur-sm">
                <nav className="flex justify-between items-center px-4 md:px-12 py-5">
                    <div className="text-white text-2xl md:text-3xl font-bold tracking-tight">
                        ATER<span className="text-red-600">SPACE</span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex gap-8 items-center">
                        <a href="#" className="text-white font-medium hover:text-gray-300 transition-colors duration-200">Home</a>
                        <a href="#" className="text-gray-400 font-medium hover:text-white transition-colors duration-200">Explore</a>
                        <a href="#" className="text-gray-400 font-medium hover:text-white transition-colors duration-200">My Films</a>
                        <a href="#" className="text-gray-400 font-medium hover:text-white transition-colors duration-200">Profile</a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden text-white"
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </nav>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <div className="md:hidden bg-black/98 px-4 py-6 border-t border-white/10">
                        <div className="flex flex-col gap-4">
                            <a href="#" className="text-white font-medium hover:text-gray-300 transition-colors duration-200">Home</a>
                            <a href="#" className="text-gray-400 font-medium hover:text-white transition-colors duration-200">Explore</a>
                            <a href="#" className="text-gray-400 font-medium hover:text-white transition-colors duration-200">My Films</a>
                            <a href="#" className="text-gray-400 font-medium hover:text-white transition-colors duration-200">Profile</a>
                        </div>
                    </div>
                )}
            </header>
        </>
    )
}

export default Header