import { motion } from "framer-motion";

function Features() {
  const features = ["Fast Charging", "Autopilot", "Luxury Interiors", "Top Safety Ratings"];

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="container mx-auto p-8"
    >
      <h2 className="text-3xl font-bold text-center mb-6">Features</h2>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        {features.map((feature, index) => (
          <li key={index} className="bg-blue-100 p-4 rounded">{feature}</li>
        ))}
      </ul>
    </motion.section>
  );
}

export default Features;
