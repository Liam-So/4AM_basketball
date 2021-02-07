import React from "react";
import { homeObjOne, homeObjTwo } from "./Data";
import HeroSection from "../../HeroSection/HeroSection";
import Navbar from "../../Navbar/Navbar";
import Sidebar from "../../Sidebar/Sidebar";

function Home() {
  return (
    <section>
      <div className="home">
        <Navbar />
      </div>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
    </section>
  );
}

export default Home;
