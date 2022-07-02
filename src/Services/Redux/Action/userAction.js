import { LOGIN, REGISTER } from "../actionType";

export const RegsiterUser = (data) =>{
    return{
        type:REGISTER,
        payload:data
    }
}

export const LoginUser = (data) =>{
    return{
        type:LOGIN,
        payload:data
    }
}