import React from "react";
import HomePage from "./components/Homepage";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import Brands from "./components/Brands";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import "aos/dist/aos.css";
import Aos from "aos";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);
  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div className="max-w-5xl mx-auto">
        <Navbar />
        <HomePage />
        <Brands />
      </div>
      <Projects />
      <Footer />
    </>
  );
}

export default App;
