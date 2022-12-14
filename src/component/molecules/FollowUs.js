import { useContext } from "react";
import { AppContext } from "../../utils/AppContext";
import SocialLink from "../atoms/SocialLink";

const FollowUs = () => {
  const { socials } = useContext(AppContext);
  return (
    <div className="container">
      <h4>Dont Miss a thing! Follow Us!</h4>
      <div className="socials">
        {socials.map((s) => (
          <SocialLink data={s} key={s.uid} />
        ))}
      </div>
    </div>
  );
};

export default FollowUs;
