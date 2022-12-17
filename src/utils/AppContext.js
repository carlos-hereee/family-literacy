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
      title: "About us",
      description:
        "Houston’s first and most experienced provider of explicit reading instruction",
      hero: {
        // isEmpty: false,
        // src: "http://familyliteracy.net/assets/img/figure/figure-about.jpg",
        isEmpty: true,
        src: "",
        alt: "main-hero",
      },
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
      title: "Family Literacy Network",
      description:
        "Houston’s first and most experienced provider of explicit reading instruction",
      isRecurring: false,
      hero: {
        // isEmpty: false,
        // src: "http://familyliteracy.net/assets/img/figure/figure-about.jpg",
        isEmpty: true,
        src: "",
        alt: "main-hero",
      },
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
          amount: "$50",
          uid: shortid.generate(),
        },
        {
          isCustom: false,
          amount: "$100",
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
          isEmpty: false,
          name: "paypal",
          types: ["paypal"],
          src: "https://www.paypal.com/donate?token=1LgJwojMGnpi0ZA9VAizMFxZh4p0Lty1EpdmvLvAQ_cGFiHG4q0vctwfxf-GnJbn5rMz9TP1BNZu4XR3",
          uid: shortid.generate(),
        },
        {
          isEmpty: true,
          name: "visa",
          types: ["mastercard", "visa", "discover", "american-express"],
          src: "/visa",
          uid: shortid.generate(),
        },
        // {
        //   name: "paypal",
        //   src: "",
        //   uid: shortid.generate(),
        // },
      ],
      // disclaimers: [
      //   {
      //     uid: shortid.generate(),
      //     response: [
      //       {
      //         uid: shortid.generate(),
      //         text: "Family Literacy Network is commited to your privacy; please read our privacy policy here.",
      //         hyperlink: {
      //           isEmpty: false,
      //           word: "privacy policy here",
      //           src: "/#",
      //         },
      //       },
      //       {
      //         uid: shortid.generate(),
      //         text: "Your payment details will be processed by (INSERT NAME HERE), a PayPal company",
      //         hyperlink: {
      //           isEmpty: false,
      //           word: "privacy policy here",
      //           src: "/#",
      //         },
      //       },
      //     ],
      //   },
      // ],
    },
    services: {
      title: "What we do",
      description: "We offer the following programs",
      hero: { isEmpty: true },
      programs: [
        {
          uid: shortid.generate(),
          hero: {
            isEmpty: true,
            isIcon: true,
            icon: "book",
            src: "reading",
            alt: "service-item",
          },
          title: "Reading Instruction",
          section: [
            {
              hyperlink: { isEmpty: true },
              hero: { isEmpty: true },
              uid: shortid.generate(),
              response:
                "Intervention focuses on building the skills that are necessary to start reading with understanding. These include segmenting (what is the first sound in the spoken word at ?), letter names, letter sounds, blending sounds to form words, vocabulary, and syntax (oral understanding and use of plurals, past and future tense, comparison, etc.).",
            },
          ],
        },
        {
          uid: shortid.generate(),
          hero: {
            isEmpty: true,
            isIcon: true,
            icon: "bulb",
            src: "bulb",
            alt: "service-item",
          },
          title: "Comprehension",
          section: [
            {
              hyperlink: { isEmpty: true },
              hero: { isEmpty: true },
              uid: shortid.generate(),
              response:
                "Intervention focuses on helping students who have difficulty understanding what they read. Students improve comprehension by optimising fluency, by learning strategies (for self-monitoring, by learning to apply text structure, and inference - “reading between the lines”) to grasp the meaning of new words and getting the gist of a text.",
            },
          ],
        },
        {
          uid: shortid.generate(),
          hero: {
            isIcon: true,
            icon: "notebook",
            isEmpty: true,
            src: "writing",
            alt: "service-item",
          },
          title: "Writing",
          section: [
            {
              hyperlink: { isEmpty: true },
              hero: { isEmpty: true },
              uid: shortid.generate(),
              response:
                "Intervention focuses on building the organizational skills needed to become effective writers. Students become more proficient writers by learning how to plan before writing. Students become more independent writers by learning strategies for self-monitoring, editing, and revising.",
            },
          ],
        },
      ],
    },
    contact: {
      uid: shortid.generate(),
      title: "Get In Touch",
      description: "Send us a message",
      hero: { isEmpty: true },
      contacts: [
        {
          uid: shortid.generate(),
          title: "Phone Number",
          icon: "phone",
          description: "713-784-7373",
        },
        {
          uid: shortid.generate(),
          title: "Email For Questions",
          icon: "email",
          description: "help@familyliteracy.net",
        },
        {
          uid: shortid.generate(),
          title: "Email For Changes In Schedule",
          icon: "email",
          description: "schedule@familyliteracy.net",
        },
        {
          uid: shortid.generate(),
          title: "Business Address",
          icon: "business",
          address: "3130 Rogerdale Rd, Houston, TX 77042",
          description: "3130 Rogerdale St. 180 Houston TX 77042",
        },
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
        services: state.services,
        contact: state.contact,
        updateIsRecurring,
      }}>
      {children}
    </AppContext.Provider>
  );
};
