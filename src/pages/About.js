import { useContext } from "react";
import Card from "../component/molecules/Card";
import Donations from "../component/organisims/Donations";
import FollowUs from "../component/molecules/FollowUs";
import { AppContext } from "../utils/AppContext";
import Hero from "../component/atoms/Hero";

const About = () => {
  const { about } = useContext(AppContext);
  console.log("about", about);
  return (
    <section className="card-container">
      <div className="card">
        <div className="card-header">
          {!about.hero.isEmpty && <Hero data={about.hero} />}
          <h3 className="title">{about.question}</h3>
          <p>{about.missionStatement}</p>
        </div>
      </div>
      {/* {about && about.map((abt) => <Card data={abt} key={abt.uid} />)} */}
      <Donations />
      {/* {abt && abt.answers.map((a) => <Card data={a} key={a.uid} />)} */}
      <FollowUs />
    </section>
  );
};

export default About;
