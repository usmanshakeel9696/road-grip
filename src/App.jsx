import { useState, useEffect } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import CarModels from "./components/CarModels";
import AboutUs from "./components/AboutUs";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans text-gray-800">
      <Header />
      <HeroSection />
      <CarModels />
      <AboutUs />
      <Features />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
