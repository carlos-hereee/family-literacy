import { useContext } from "react";
import { AppContext } from "../../utils/AppContext";
import SocialLink from "../atoms/SocialLink";
import CardHeader from "../molecules/CardHeader";
import CheckButton from "../molecules/CheckButton";

const Donations = () => {
  const { about, donations, updateIsRecurring } = useContext(AppContext);
  console.log("donations", donations);
  return (
    <div className="donations">
      <CardHeader data={about} />
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
