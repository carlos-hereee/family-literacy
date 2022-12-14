import { useContext } from "react";
import Donations from "../component/organisims/Donations";
import FollowUs from "../component/molecules/FollowUs";
import { AppContext } from "../utils/AppContext";
import Card from "../component/organisims/Card";

const About = () => {
  const { about } = useContext(AppContext);
  return (
    <section className="card-container">
      {/* <Card data={about} /> */}
      <Donations />
      <FollowUs />
    </section>
  );
};

export default About;
