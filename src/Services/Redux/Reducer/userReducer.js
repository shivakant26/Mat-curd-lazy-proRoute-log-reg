import { LOGIN_SUCCESS, REGISTER_SUCCESS } from "../actionType";

const initialState = {
  register_User: localStorage.getItem("registerUser")
    ? JSON.parse(localStorage.getItem("registerUser"))
    : [],
};

const userReaducer = (state = initialState, action) => {
  console.log("action", action);
  switch (action.type) {
    case REGISTER_SUCCESS:
      var user = state.register_User;
        user.push(action.payload)
        localStorage.setItem("registerUser",JSON.stringify(user))
      return {
        ...state,
        register_User: [...user],
        status: 201,
        message: "Register user Successfully",
      };
    case LOGIN_SUCCESS:
      var token, status, message;
      const reg_user_list = JSON.parse(localStorage.getItem("registerUser"));
      reg_user_list.forEach((element) => {
        if (element.email === action.payload.email && element.password === action.payload.password) {
          token = "weewerwr344efsd.ertertert54dfgdt45.trergsdfwer";
          localStorage.setItem("login-token", JSON.stringify(token));
          status = true;
          message = true;
        }
      });
      return {
        ...state,
        status: status === true ? 200 : 400,
        token: token === token ? token : null,
        message: message === true ? "Login Successfull" : "Invalid Credential",
      };
    default:
      return state;
  }
};

export default userReaducer;
