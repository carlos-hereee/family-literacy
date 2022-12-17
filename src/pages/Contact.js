import { useContext } from "react";
import CardHeader from "../component/molecules/CardHeader";
import ContactLink from "../component/molecules/ContactLink";
import FollowUs from "../component/molecules/FollowUs";
import { AppContext } from "../utils/AppContext";

const Contact = () => {
  const { contact } = useContext(AppContext);
  return (
    <section className="card">
      <CardHeader data={contact} />
      {contact.contacts.map((c) => (
        <ContactLink data={c} key={c.uid} />
      ))}
      <FollowUs />
    </section>
  );
};

export default Contact;
