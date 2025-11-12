import { Star, Plus, ChevronLeft, ChevronRight, Menu, X, Play, Info } from 'lucide-react';


const FilmCard = ({ film }) => (
    <div className="shrink-0 w-44 md:w-52 group cursor-pointer">
        <div className="relative overflow-hidden rounded-md transition-all duration-300 group-hover:scale-105 group-hover:ring-2 group-hover:ring-white/20">
            <img
                src={film.thumbnail}
                alt={film.title}
                className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                    <button className="bg-white text-black rounded-full p-3 hover:scale-110 transition-transform duration-200">
                        <Play className="w-5 h-5 fill-black" />
                    </button>
                    <button className="text-white hover:scale-110 transition-transform duration-200">
                        <Info className="w-5 h-5" />
                    </button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3">
                    <h3 className="text-white font-bold text-sm mb-1">{film.title}</h3>
                    <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                        <span className="text-white text-xs font-medium">{film.rating}</span>
                    </div>
                </div>
            </div>
        </div>
        <h3 className="text-white font-medium mt-2 text-sm truncate">{film.title}</h3>
        <div className="flex items-center gap-1 mt-1">
            <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
            <span className="text-gray-400 text-xs">{film.rating}</span>
        </div>
    </div>
);

export default FilmCard;