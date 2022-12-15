import React from "react";
import FollowUs from "../component/molecules/FollowUs";
import About from "./About";
import Services from "./Services";

const Landing = () => {
  return (
    <div className="card-container">
      <About />
      {/* <div className="card"></div> */}
      <Services />
    </div>
  );
};

export default Landing;
