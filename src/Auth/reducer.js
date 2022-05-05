export const reducer = (state, action) => {
  switch (action.type) {
    case "registered":
      return {...state, status: true };
    case "unregistered":
      return { status: false };
    default:
      throw new Error();
  }
};
