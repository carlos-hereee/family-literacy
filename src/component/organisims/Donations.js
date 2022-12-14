import { useContext } from "react";
import { AppContext } from "../../utils/AppContext";
import SocialLink from "../atoms/SocialLink";
import CheckButton from "../molecules/CheckButton";
import MissionStatement from "../molecules/MissionStatement";

const Donations = () => {
  const { donations, updateIsRecurring } = useContext(AppContext);
  return (
    <div className="donations">
      <div className="donations-header">
        <MissionStatement content={donations.missionStatement} />
      </div>
      <div className="donations-body">
        <h4>Donate Now</h4>
        <div className="donation-recurrence-container">
          <CheckButton
            data={{ isRecurring: donations.isRecurring, content: "One Time" }}
            click={() => updateIsRecurring(true)}
          />
          <CheckButton
            data={{ isRecurring: !donations.isRecurring, content: "Monthly" }}
            click={() => updateIsRecurring(false)}
          />
        </div>

        {donations.paymentMethod.map((d) => (
          <SocialLink data={d} key={d.uid} />
        ))}
      </div>
    </div>
  );
};

export default Donations;
