import React from "react";
import Home from "../../component/home/Home";
import Services from "../Services";
import About from "../About";
import PersonalTrainer from "../../component/personal-trainer/Trainer";
import Footer from "../../component/Footer/Footer";
import Footer_base from "../../component/Footer_base/Footer_base";
import Contact from "../Contact/Contact";

function HomePage() {
  return (
    <>
      <Home />
      <Services />
      <PersonalTrainer />
      <About />
      <Contact />
      <Footer />
      <Footer_base />
    </>
  );
}

export default HomePage;
