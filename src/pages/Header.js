import { useEffect, useState } from "react";
import shortid from "shortid";
import Appname from "../atoms/Appname";
import BurgerButton from "../atoms/BurgerButton";
import Navlink from "../atoms/Navlink";

const Header = () => {
  const [menu, setMenu] = useState([
    { name: "Home", isActive: true, uid: shortid.generate() },
    { name: "About", isActive: false, uid: shortid.generate() },
    { name: "Service", isActive: false, uid: shortid.generate() },
    { name: "Donate", isActive: false, uid: shortid.generate() },
    { name: "Contact", isActive: false, uid: shortid.generate() },
  ]);
  const [isActive, setActive] = useState(false);
  const [isClose, setClose] = useState(false);
  const [burger, setBurger] = useState({ name: "burger" });
  useEffect(() => {
    const endAnimation = () => setClose(true);
    // TODO: close navigation is clicks outside container
    // const onClick = (event) => {
    //   // console.log("navRef.current", navRef.current);
    //   if (navRef.current && !navRef.current.contains(event.target)) {
    //     setClose(true);
    //   }
    // };
    document.addEventListener("animationend", endAnimation, true);
    // document.addEventListener("mousedown", onClick, true);
    return () => {
      document.removeEventListener("animationend", endAnimation, true);
      // document.removeEventListener("mousedown", onClick, true);
    };
  }, []);
  console.log("isClose", isClose, " isActive", isActive);
  const handleClick = () => {
    setActive(!isActive);
    setBurger({ name: isActive ? "burger" : "x" });
  };

  // TODO: closing annimation
  return (
    <header>
      <Appname />
      <nav className="primary-navigation">
        <BurgerButton options={burger} click={handleClick} />
        <ul
          className="navigation"
          data-state={isActive ? "open" : isClose ? "closing" : "close"}>
          {menu.map((m) => (
            <Navlink key={m.uid} data={m} />
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
