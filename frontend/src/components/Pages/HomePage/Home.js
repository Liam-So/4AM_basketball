import React from "react";
import { homeObjOne, homeObjTwo } from "./Data";
import HeroSection from "../../HeroSection/HeroSection";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import Topbar from "../../Topbar/Topbar";

function Home() {
  return (
    <section>
      <div className="home">
        <Topbar />
        <div className="subHome text-3xl md:text-5xl">
          4AM Basketball Camp
          <Link
            to="/register"
            style={{ color: "#fff", textDecoration: "none" }}
            className="my-4 py-3 px-5 bg-yellow-500 rounded-full text-sm hover:bg-yellow-300 transition duration-300 ease-in-out flex items-center animate-bounce"
          >
            REGISTER NOW
          </Link>
        </div>
      </div>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
    </section>
  );
}

export default Home;
