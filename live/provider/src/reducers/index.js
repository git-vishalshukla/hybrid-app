const defaultStates = {
	isLoggedIn: false,
	user: "Guest"
}

const configState = (state = defaultStates, action) => {
  switch (action.type) {
    case "SET_LOGGEDIN":
      return {
		...state,
        isLoggedIn : action.value
      };
	  break;
	case "SET_USER":
      return {
		...state,
        user : action.value
      };
	  break;
    default:
      return state;
  }
};

export default configState;
