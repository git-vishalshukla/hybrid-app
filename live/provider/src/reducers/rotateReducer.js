export default (state, action) => {
  switch (action.type) {
    case "img_url":
      return {
        img_url : action.img_url
      };
    case "css_url":
      return {
        css_url : action.css_url
      };
    default:
      return state;
  }
};
