import { useContext } from "react";
import CardHeader from "../component/molecules/CardHeader";
import ContactLink from "../component/molecules/ContactLink";
import FollowUs from "../component/molecules/FollowUs";
import { AppContext } from "../utils/AppContext";

const Contact = () => {
  const { contact } = useContext(AppContext);
  return (
    <div className="card-container">
      <CardHeader data={contact} />
      {/* <FollowUs /> */}
      {contact.contacts.map((c) => (
        <ContactLink data={c} key={c.uid} />
      ))}
    </div>
  );
};

export default Contact;
