import { useContext } from "react";
import CardBody from "../component/molecules/CardBody";
import CardHeader from "../component/molecules/CardHeader";
// import Card from "../component/organisims/Card";
import { AppContext } from "../utils/AppContext";

const Services = () => {
  const { services } = useContext(AppContext);
  // console.log("services", services);

  return (
    <div className="container">
      <div className="card">
        <CardHeader data={services} />
        <div className="card-body">
          {services.programs.map((l) => (
            <div key={l.uid}>
              <CardHeader data={l} />
              <CardBody data={l} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
