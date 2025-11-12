import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import UploadModal from '../components/UploadModal';

const HomePage = () => {
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
            <Hero />

            {/* Film Sections */}

            {/* Floating Upload Button */}

            {/* Upload Modal */}
            <UploadModal />

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default HomePage;