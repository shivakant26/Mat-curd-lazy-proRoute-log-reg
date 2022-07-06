import { DELETE_SUCCESS, EDIT_SUCCESS, LOGIN_SUCCESS, LOGOUT_SUCCESS, REGISTER_SUCCESS, UPDATE_SUCCESS } from "../actionType";

const initialState = {
  register_User: localStorage.getItem("registerUser")
    ? JSON.parse(localStorage.getItem("registerUser"))
    : [],
    isAuth: localStorage.getItem("login-token") ?  localStorage.getItem("login-token") : false
    
};

const userReaducer = (state = initialState, action) => {
  console.log("action", action);
  switch (action.type) {
    // Registration case
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
      // login case
    case LOGIN_SUCCESS:
      var token, status, message;
      const reg_user_list = JSON.parse(localStorage.getItem("registerUser"));
      reg_user_list?.forEach((element) => {
        if (element.email === action.payload.email && element.password === action.payload.password) {
          token = "weewerwr344efsd.ertertert54dfgdt45.trergsdfwer";
          localStorage.setItem("login-token", JSON.stringify(token));
          status = true;
          message = true;
        }
      });
      return {
        ...state,
        isAuth:token,
        status: status === true ? 200 : 400,
        token: token === token ? token : null,
        message: message === true ? "Login Successfull" : "Invalid Credential",
      };
      // delete user case
      case DELETE_SUCCESS : 
      let userlist = JSON.parse(localStorage.getItem("registerUser"));
      userlist.splice(action.payload,1);
      localStorage.setItem("registerUser",JSON.stringify(userlist))
      return{
        ...state,
        register_User: [...userlist],
      }
      // edit user case 
      case EDIT_SUCCESS :
        let all_Data = JSON.parse(localStorage.getItem("registerUser"));
        let object = all_Data[action.payload]
        return{
          ...state,
          isEdit:object,
          id:action.payload 
        }
        // Logout user
        case LOGOUT_SUCCESS :
        localStorage.removeItem('login-token')
        return{
          ...state,
          isAuth:false 
        }
        // Update user case
        case UPDATE_SUCCESS :
          let Update_userlist = JSON.parse(localStorage.getItem("registerUser"));
          let updatedObject = {
            name:action.payload.name,
            email:action.payload.email,
            password:action.payload.password,
            phone:action.payload.phone
          }
          Update_userlist.splice(action.id,1,updatedObject)
          localStorage.setItem("registerUser",JSON.stringify(Update_userlist))
          return{
            ...state,
            status:false,
            isEdit:false,
            register_User:[...Update_userlist],
            message:"Record Update Successfully"
          }
    default:
      return state;
  }
};

export default userReaducer;
