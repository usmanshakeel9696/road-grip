import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function CarModels() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    setCars([
      { id: 1, name: "RG Model S", image: "/image1.png" },
      { id: 2, name: "RG Model X", image: "/image2.png" },
      { id: 3, name: "RG Roadster", image: "/image3.png" },
    ]);
  }, []);

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="container mx-auto p-8"
    >
      <h2 className="text-4xl font-bold mb-10 text-center text-gray-800">Our Models</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cars.map(car => (
          <motion.div 
            key={car.id} 
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2"
            whileHover={{ scale: 1.05 }}
          >
            <div className="overflow-hidden rounded-xl mb-4">
              <img 
                src={car.image} 
                alt={car.name} 
                className="w-full h-60 object-cover transform hover:scale-105 transition duration-500"
              />
            </div>
            <h3 className="text-2xl font-semibold text-center text-gray-700">{car.name}</h3>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default CarModels;
