import React from "react";
// import { useContext } from "react";
import Icons from "../atoms/Icons";
// import SetNotificationCount from "../molecules/SetNotificationCount";

const BurgerButton = ({ isBurger, click }) => {
  // const { burgerOptions } = useContext(GlamourellaContext);
  return (
    <button
      type="button"
      onClick={click}
      className={`${isBurger ? "x" : "burger"} btn-icons`}
      aria-controls="primary-navigation"
      aria-expanded={isBurger === "x"}
      aria-label="menu">
      <Icons name={isBurger ? "x" : "burger"} size="2x" />
      {/* <SetNotificationCount count={options.notification} /> */}
    </button>
  );
};

export default BurgerButton;
