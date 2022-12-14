import { useContext } from "react";
import { AppContext } from "../../utils/AppContext";
import SocialLink from "../atoms/SocialLink";
import MissionStatement from "../molecules/MissionStatement";

const Donations = () => {
  const { donations } = useContext(AppContext);

  return (
    <div className="donations">
      <div className="donations-header">
        <MissionStatement content={donations.missionStatement} />
      </div>
      <div className="donations-body">
        {donations.paymentMethod.map((d) => (
          <SocialLink data={d} key={d.uid} />
        ))}
      </div>
    </div>
  );
};

export default Donations;
