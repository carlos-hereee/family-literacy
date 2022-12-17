import { useContext, useEffect, useState } from "react";
import Appname from "../component/atoms/Appname";
import BurgerButton from "../component/atoms/BurgerButton";
import Navlink from "../component/atoms/Navlink";
import { AppContext } from "../utils/AppContext";

const Header = () => {
  const { menu } = useContext(AppContext);
  const [isActive, setActive] = useState(false);
  const [isClose, setClose] = useState(false);
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

  const handleClick = () => setActive(!isActive);

  return (
    <header>
      <Appname />
      <nav className="primary-navigation">
        <BurgerButton isBurger={isActive} click={handleClick} />
        <ul
          className="navigation"
          data-state={isActive ? "open" : isClose ? "closing" : "close"}>
          {menu.map((m) => (
            <Navlink key={m.uid} data={m} click={handleClick} />
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
