import React from "react";
// import { useContext } from "react";
import Icons from "../atoms/Icons";
// import SetNotificationCount from "../molecules/SetNotificationCount";

const BurgerButton = ({ options, click }) => {
  // const { burgerOptions } = useContext(GlamourellaContext);
  return (
    <button
      type="button"
      onClick={click}
      className={`${options.name} btn-icons`}
      aria-controls="primary-navigation"
      aria-expanded={options.name === "x"}
      aria-label="menu">
      <Icons name={options.name.toLowerCase()} size="2x" />
      {/* <SetNotificationCount count={options.notification} /> */}
    </button>
  );
};

export default BurgerButton;
