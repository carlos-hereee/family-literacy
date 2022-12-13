import { useState } from "react";
import shortid from "shortid";
import Appname from "../atoms/Appname";
import Logo from "../atoms/Logo";

const Header = () => {
  const [menu, setMenu] = useState([
    { name: "home", isActive: true, uid: shortid.generate() },
    { name: "about", isActive: false, uid: shortid.generate() },
    { name: "services", isActive: false, uid: shortid.generate() },
    { name: "booking", isActive: false, uid: shortid.generate() },
    { name: "gallery", isActive: false, uid: shortid.generate() },
    { name: "checkout", isActive: false, uid: shortid.generate() },
    { name: "dashboard", isActive: false, uid: shortid.generate() },
  ]);
  return (
    <header>
      <head>
        <title>Family Literacy Network</title>
      </head>
      <Appname />
      <nav className="primary-navigation">
        <ul className="navigation">
          {menu.map((m) => (
            <li key={m.uid} className="nav-link">
              {m.name}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
