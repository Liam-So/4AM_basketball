import React from "react";
import { homeObjOne, homeObjTwo } from "./Data";
import HeroSection from "../../HeroSection/HeroSection";

function Home() {
  return (
    <section>
      <div className="home">{/* <Navbar /> */}</div>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
    </section>
  );
}

export default Home;
