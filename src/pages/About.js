import { useContext } from "react";
import Donations from "./Donations";
import { AppContext } from "../utils/AppContext";
import Card from "../component/organisims/Card";

const About = () => {
  const { about } = useContext(AppContext);
  return (
    <section className="card-container">
      <Card data={about} />
      <Donations />
    </section>
  );
};

export default About;
