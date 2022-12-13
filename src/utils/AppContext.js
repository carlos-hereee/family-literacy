import React, { createContext, useReducer } from "react";
import shortid from "shortid";
import { reducer } from "./AppReducer";
export const AppContext = createContext();

export const AppState = ({ children }) => {
  const initialState = {
    isLoading: false,
    menu: [
      { name: "Home", isActive: true, uid: shortid.generate() },
      { name: "About", isActive: false, uid: shortid.generate() },
      { name: "Service", isActive: false, uid: shortid.generate() },
      { name: "Donate", isActive: false, uid: shortid.generate() },
      { name: "Contact", isActive: false, uid: shortid.generate() },
    ],
    about: [
      {
        uid: shortid.generate(),
        question: "A Story Of Us",
        hero: {
          src: "http://familyliteracy.net/assets/img/figure/figure-about.jpg",
          alt: "main-hero",
        },
        description:
          "Houston’s first and most experienced provider of explicit reading instruction",
        answers: [
          {
            uid: shortid.generate(),
            hero: {
              src: "",
              alt: "",
            },
            response:
              "Over 20 years of providing comprehensive reading assessment and one-on-one explicit reading therapy, applying (and adding to) the 35-year research program planned and funded by the National Institute of Child Health and Human Development (NICHD).",
          },
          {
            uid: shortid.generate(),
            hero: {
              src: "",
              alt: "",
            },
            response:
              "Our interventions can start with the language skills of a four year old and systematically build the knowledge and processing skills needed to learn to read.",
          },
          {
            uid: shortid.generate(),
            hero: {
              src: "",
              alt: "",
            },
            response:
              "Our instructional program was the first to freely incorporate current linguistic and working memory research with the best of systematic phonics and the comprehension instruction, the first to demostrate the effect of instruction on brain scans (see PBS special at Reading Rockets ), and the first to the International Space Station ;-)!",
          },
        ],
      },
    ],
    app: [],
    socials: [],
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider
      value={{
        app: state.app,
        isLoading: state.isLoading,
        menu: state.menu,
        about: state.about,
        socials: state.socials,
      }}>
      {children}
    </AppContext.Provider>
  );
};
