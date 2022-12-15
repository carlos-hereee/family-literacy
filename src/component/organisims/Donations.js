import { useContext, useState } from "react";
import { AppContext } from "../../utils/AppContext";
import Icons from "../atoms/Icons";
import PaymentLink from "../atoms/PaymentLink";
import CardHeader from "../molecules/CardHeader";
import CheckButton from "../molecules/CheckButton";
import FollowUs from "../molecules/FollowUs";

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
              <div className="custom-field" key={d.uid}>
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
        <div className="payment-methods">
          {donations.paymentMethod.map((d) => (
            <PaymentLink data={d} key={d.uid} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Donations;
