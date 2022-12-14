import { useContext } from "react";
import { AppContext } from "../../utils/AppContext";
import Icons from "../atoms/Icons";
import MissionStatement from "../molecules/MissionStatement";

const Donations = () => {
  // const { name, isEmpty } = data;
  const { donations } = useContext(AppContext);

  return (
    <div className="donations">
      <MissionStatement />
      {donations.map((d) => (
        <a
          key={d.uid}
          className="social-link"
          href={d.isEmpty ? "/#" : d.src}
          data-state={d.name}>
          <Icons name={d.name} size="2x" />
        </a>
      ))}
    </div>
  );
};

export default Donations;
