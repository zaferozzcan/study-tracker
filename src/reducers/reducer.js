export const initialState = {
  item: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return {
        ...state,
        user: action.user,
      };
    case "ADD_STUDY":
      return {
        ...state,
        study: action.study,
      };
    default:
      return state;
  }
};

export default reducer;
