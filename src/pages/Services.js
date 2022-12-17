import { useContext } from "react";
import CardHeader from "../component/molecules/CardHeader";
import CardSection from "../component/molecules/CardSection";
// import Card from "../component/organisims/Card";
import { AppContext } from "../utils/AppContext";

const Services = () => {
  const { services } = useContext(AppContext);
  console.log("services", services.programs);

  return (
    <div className="container">
      <div className="card">
        <CardHeader data={services} />
        <div className="card-body">
          {services.programs.map((l) => (
            <CardSection data={l} key={l.uid} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
