import { useContext } from "react";
import CardHeader from "../component/molecules/CardHeader";
import Card from "../component/organisims/Card";
import { AppContext } from "../utils/AppContext";

const Services = () => {
  const { services } = useContext(AppContext);
  // console.log("services", services);

  return (
    <div className="card-container">
      {/* <Card data={services} /> */}
      {/* <div className="card"></div> */}
      <CardHeader data={services} />
      {services.programs.map((l) => (
        <Card data={l} key={l.uid} />
      ))}
    </div>
  );
};

export default Services;
