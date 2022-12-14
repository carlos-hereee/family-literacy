const isLoading = (state, action) => {
  return {
    ...state,
    isLoading: action.payload,
  };
};
const updateDonationRecurring = (state, action) => {
  return {
    ...state,
    donations: {
      ...state.donations,
      isRecurring: action.payload,
    },
  };
};
export const reducer = (state, action) => {
  switch (action.type) {
    case "IS_LOADING":
      return isLoading(state, action);
    case "UPDATE_DONATION_RECURRING":
      return updateDonationRecurring(state, action);
    default:
      return state;
  }
};
