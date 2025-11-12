import React, { useState } from 'react'
import { Plus } from 'lucide-react';


function UploadModal() {
    const [showUploadModal, setShowUploadModal] = useState(false);
    return (
        <>
            <button
                onClick={() => setShowUploadModal(true)}
                className="fixed bottom-8 right-8 bg-linear-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white p-5 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 z-40 group"
            >
                <Plus className="w-7 h-7 group-hover:rotate-90 transition-transform duration-300" />
            </button>
            {showUploadModal && (
                <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
                    <div className="bg-linear-to-br from-zinc-900 to-black rounded-2xl p-8 max-w-md w-full border border-white/10 shadow-2xl">
                        <h2 className="text-white text-3xl font-bold mb-3">Post Your Film</h2>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            Share your creative vision with the world. Upload feature coming soon – where every filmmaker's story matters.
                        </p>
                        <button
                            onClick={() => setShowUploadModal(false)}
                            className="w-full bg-linear-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white py-4 rounded-xl font-bold transition-all duration-200 hover:scale-105"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}

export default UploadModal