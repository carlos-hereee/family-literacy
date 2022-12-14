import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  fa0,
  fa1,
  fa2,
  fa3,
  fa4,
  fa5,
  fa6,
  fa7,
  fa8,
  fa9,
  faBars,
  faBullseye,
  faCalendarAlt,
  faCheckCircle,
  faCircle,
  faEnvelope,
  faGlobe,
  faHands,
  faHandSpock,
  faHome,
  faImage,
  faInfo,
  faListCheck,
  faPaperPlane,
  faShoePrints,
  faShoppingCart,
  faUsd,
  faUser,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const svg = {
  home: faHome,
  about: faInfo,
  services: faListCheck,
  booking: faCalendarAlt,
  gallery: faImage,
  contact: faEnvelope,
  checkout: faShoppingCart,
  pricing: faUsd,
  check: faCheckCircle,
  uncheck: faCircle,
  submit: faPaperPlane,
  dashboard: faUser,
  burger: faBars,
  wig: faUser,
  braids: faUser,
  nail: faHandSpock,
  all: faGlobe,
  manicure: faHands,
  pedicure: faShoePrints,
  promotion: faBullseye,
  // socials
  instagram: faInstagram,
  linkedIn: faLinkedinIn,
  facebook: faFacebook,
  twitter: faTwitter,
  x: faX,
  1: fa1,
  2: fa2,
  3: fa3,
  4: fa4,
  5: fa5,
  6: fa6,
  7: fa7,
  8: fa8,
  9: fa9,
  0: fa0,
};
const Icons = ({ name, size }) => {
  return <FontAwesomeIcon icon={svg[name]} size={size} />;
};

export default Icons;
