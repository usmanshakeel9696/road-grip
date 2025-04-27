import { motion } from "framer-motion";

function Testimonials() {
  const feedback = [
    "Amazing driving experience!",
    "Unmatched technology.",
    "Incredible performance and design.",
  ];

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-gray-100 py-12"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">What Our Customers Say</h2>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          {feedback.map((quote, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-6 rounded shadow w-full md:w-1/3"
              whileHover={{ scale: 1.05 }}
            >
              <p className="italic">"{quote}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Testimonials;
