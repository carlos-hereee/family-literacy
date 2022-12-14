import { useContext } from "react";
import Card from "../component/molecules/Card";
import Donations from "../component/organisims/Donations";
import FollowUs from "../component/molecules/FollowUs";
import { AppContext } from "../utils/AppContext";

const About = () => {
  const { about } = useContext(AppContext);
  return (
    <section className="card-container">
      {about && about.map((abt) => <Card data={abt} key={abt.uid} />)}
      <Donations />
      {/* {abt && abt.answers.map((a) => <Card data={a} key={a.uid} />)} */}
      <FollowUs />
    </section>
  );
};

export default About;
