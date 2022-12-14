import { useContext, useState } from "react";
import { AppContext } from "../../utils/AppContext";
import Icons from "../atoms/Icons";
import SocialLink from "../atoms/SocialLink";
import CardHeader from "../molecules/CardHeader";
import CheckButton from "../molecules/CheckButton";

const Donations = () => {
  const { about, donations, updateIsRecurring } = useContext(AppContext);
  const [custom, setCustom] = useState("");
  const change = (e) => setCustom(e.target.value);
  return (
    <div className="donations">
      <CardHeader data={about} />
      <div className="donations-body">
        <h4 className="sub-title">Donate</h4>
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
        <div className="donate-buttons">
          {donations.donate.map((d) =>
            d.isCustom ? (
              <div className="custom-field">
                <label htmlFor="custom">Custom Amount </label>
                <Icons name="usd" size="2x" />
                <input
                  value={custom}
                  onChange={change}
                  name="custom"
                  className="custom"
                  type="number"
                  placeholder="5"
                />
              </div>
            ) : (
              <button type="button" className="btn-primary" key={d.uid}>
                {d.amount}
              </button>
            )
          )}
        </div>
        {donations.paymentMethod.map((d) => (
          <SocialLink data={d} key={d.uid} />
        ))}
      </div>
    </div>
  );
};

export default Donations;
