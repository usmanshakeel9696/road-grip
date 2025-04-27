import { motion } from "framer-motion";

function AboutUs() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="bg-gray-50 py-12"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">About Road Grip</h2>
        <p className="max-w-xl mx-auto text-gray-600">
          DriveX is a pioneer in electric vehicles. Combining luxury with cutting-edge technology.
        </p>
      </div>
    </motion.section>
  );
}

export default AboutUs;
