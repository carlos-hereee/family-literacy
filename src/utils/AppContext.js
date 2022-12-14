import React, { createContext, useReducer } from "react";
import shortid from "shortid";
import { reducer } from "./AppReducer";
export const AppContext = createContext();

export const AppState = ({ children }) => {
  const initialState = {
    isLoading: false,
    app: [],
    menu: [
      { name: "Home", isActive: true, uid: shortid.generate() },
      { name: "About", isActive: false, uid: shortid.generate() },
      { name: "Service", isActive: false, uid: shortid.generate() },
      { name: "Donate", isActive: false, uid: shortid.generate() },
      { name: "Contact", isActive: false, uid: shortid.generate() },
    ],
    about: {
      uid: shortid.generate(),
      missionStatement:
        "Houston’s first and most experienced provider of explicit reading instruction",
      hero: {
        isEmpty: false,
        src: "http://familyliteracy.net/assets/img/figure/figure-about.jpg",
        alt: "main-hero",
      },
      question: "A Story Of Us",
      answers: [
        {
          uid: shortid.generate(),
          hero: {
            isEmpty: true,
            src: "",
            alt: "",
          },
          hyperlink: {
            isEmpty: true,
            word: "",
            src: "",
          },
          response:
            "Over 20 years of providing comprehensive reading assessment and one-on-one explicit reading therapy, applying (and adding to) the 35-year research program planned and funded by the National Institute of Child Health and Human Development (NICHD).",
        },
        {
          uid: shortid.generate(),
          hero: {
            isEmpty: true,
            src: "",
            alt: "",
          },
          hyperlink: {
            isEmpty: true,
            word: "Reading Rockets",
            src: "",
          },
          response:
            "Our interventions can start with the language skills of a four year old and systematically build the knowledge and processing skills needed to learn to read.",
        },
        {
          uid: shortid.generate(),
          hero: {
            isEmpty: true,
            src: "",
            alt: "",
          },
          hyperlink: {
            isEmpty: false,
            word: "Reading Rockets",
            src: "https://www.readingrockets.org/shows/launching/brain",
          },
          response:
            "Our instructional program was the first to freely incorporate current linguistic and working memory research with the best of systematic phonics and the comprehension instruction, the first to demostrate the effect of instruction on brain scans (see PBS special at Reading Rockets ), and the first to the International Space Station ;-)!",
        },
      ],
    },
    socials: [
      {
        uid: shortid.generate(),
        isEmpty: true,
        name: "instagram",
        src: "",
      },
      {
        uid: shortid.generate(),
        isEmpty: true,
        name: "facebook",
        src: "",
      },
      {
        uid: shortid.generate(),
        isEmpty: true,
        name: "twitter",
        src: "",
      },
      {
        uid: shortid.generate(),
        isEmpty: true,
        name: "linkedIn",
        src: "",
      },
    ],
    donations: {
      isRecurring: false,
      donate: [
        {
          isCustom: false,
          amount: "$5",
          uid: shortid.generate(),
        },
        {
          isCustom: false,
          amount: "$10",
          uid: shortid.generate(),
        },
        {
          isCustom: false,
          amount: "50",
          uid: shortid.generate(),
        },
        {
          isCustom: false,
          amount: "100",
          uid: shortid.generate(),
        },
        {
          isCustom: true,
          amount: "",
          uid: shortid.generate(),
        },
      ],
      paymentMethod: [
        {
          name: "paypal",
          src: "https://www.paypal.com/donate?token=J2caKUncHGAedMMwwN-G_umeVL6JAjHr0Q372TOvhn0Q7HWP2vBHd7L1t9d_fK9zv97iokeLc4vk1-hx",
          uid: shortid.generate(),
        },
        // {
        //   name: "paypal",
        //   src: "",
        //   uid: shortid.generate(),
        // },
      ],
    },
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateIsRecurring = (isRecurring) => {
    dispatch({ type: "IS_LOADING", payload: true });
    dispatch({ type: "UPDATE_DONATION_RECURRING", payload: !isRecurring });
  };
  return (
    <AppContext.Provider
      value={{
        app: state.app,
        isLoading: state.isLoading,
        menu: state.menu,
        about: state.about,
        socials: state.socials,
        donations: state.donations,
        updateIsRecurring,
      }}>
      {children}
    </AppContext.Provider>
  );
};
