import React from "react";
import HeroSection from "../../HeroSection/HeroSection";
import { homeObjOne } from "./Data";
import Topbar from "../../Topbar/Topbar";

function Donate() {

  return (
    <div>
      <Topbar transparent={true}/>
      <HeroSection {...homeObjOne} />
    </div>
  );
}

export default Donate;
