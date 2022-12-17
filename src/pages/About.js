import { useContext } from "react";
import { AppContext } from "../utils/AppContext";
import Answer from "../component/molecules/Answer";
import CardHeader from "../component/molecules/CardHeader";

const About = () => {
  const { about } = useContext(AppContext);
  return (
    <section className="card">
      <CardHeader data={about} />
      <div className="card-body">
        {about.answers.map((answer) => (
          <Answer data={answer} key={answer.uid} />
        ))}
      </div>
    </section>
  );
};

export default About;
