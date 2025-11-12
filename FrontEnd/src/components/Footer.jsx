import React from 'react'

function Footer() {
    return (
        <>
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
        </>
    )
}

export default Footer