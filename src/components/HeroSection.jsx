import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function HeroSection() {
  const [showVideo, setShowVideo] = useState(false);

  const handleButtonClick = () => {
    setShowVideo(true);
  };

  const handleVideoEnd = () => {
    setShowVideo(false);
  };

  return (
    <motion.section 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="relative bg-gradient-to-r from-blue-800 to-indigo-900 text-white h-[90vh] flex items-center justify-center overflow-hidden"
    >
      <div className="text-center space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-5xl md:text-6xl font-bold"
        >
          Experience the Future of Driving
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-xl md:text-2xl"
        >
          Luxury and performance combined.
        </motion.p>
      </div>

      {/* Small Play Button Always Visible */}
      <motion.button 
        onClick={handleButtonClick}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        whileHover={{ scale: 1.1 }}
        className="absolute bottom-8 right-8 bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-full shadow-lg transition transform"
      >
        ▶ Play Video
      </motion.button>

      {/* Video Player Appears After Click */}
      <AnimatePresence>
        {showVideo && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.8 }}
            className="absolute bottom-24 right-8 w-80 h-48 rounded-xl overflow-hidden shadow-2xl"
          >
            <video 
              src="/video1.mp4" 
              autoPlay 
              onEnded={handleVideoEnd}
              className="w-full h-full object-cover"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}

export default HeroSection;
