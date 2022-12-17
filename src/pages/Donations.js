import { useContext, useState } from "react";
import { AppContext } from "../utils/AppContext";
import Icons from "../component/atoms/Icons";
import PaymentLink from "../component/atoms/PaymentLink";
import CardHeader from "../component/molecules/CardHeader";
import CheckButton from "../component/molecules/CheckButton";

const Donations = () => {
  const { about, donations, updateIsRecurring } = useContext(AppContext);
  const [custom, setCustom] = useState("");
  const change = (e) => setCustom(e.target.value);
  return (
    <section className="card donations">
      <CardHeader data={about} />
      <div className="card-body">
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
                  placeholder="Other"
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
    </section>
  );
};

export default Donations;
