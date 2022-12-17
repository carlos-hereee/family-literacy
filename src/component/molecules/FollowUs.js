import { useContext } from "react";
import { AppContext } from "../../utils/AppContext";
import SocialLink from "../atoms/SocialLink";

const FollowUs = () => {
  const { socials } = useContext(AppContext);
  return (
    <div className="socials">
      <h4 className="title">Dont miss a thing, Follow us on our socials</h4>
      <div className="socials-icons">
        {socials.map((s) => (
          <SocialLink data={s} key={s.uid} />
        ))}
      </div>
    </div>
  );
};

export default FollowUs;
