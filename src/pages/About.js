import { useContext } from "react";
import Donations from "../component/organisims/Donations";
import FollowUs from "../component/molecules/FollowUs";
import { AppContext } from "../utils/AppContext";
import Hero from "../component/atoms/Hero";
import Answer from "../component/molecules/Answer";

const About = () => {
  const { about } = useContext(AppContext);
  return (
    <section className="card-container">
      <div className="card">
        <div className="card-header">
          {!about.hero.isEmpty && <Hero data={about.hero} />}
          <h3 className="title">{about.question}</h3>
          <p>{about.missionStatement}</p>
        </div>
        <div className="card-body">
          {about.answers.map((answer) => (
            <Answer data={answer} key={answer.uid} />
          ))}
        </div>
      </div>
      <Donations />
      <FollowUs />
    </section>
  );
};

export default About;
