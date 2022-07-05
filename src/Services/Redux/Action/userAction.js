import { DELETE, EDIT, LOGIN, LOGOUT, REGISTER, UPDATE } from "../actionType";

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

export const DeleteUser = (id) =>{
    return{
        type:DELETE,
        payload:id
    }
}

export const editUser = (id) =>{
    return{
        type:EDIT,
        payload:id
    }
}

export const updateUser = (data,id) =>{
    return{
        type:UPDATE,
        payload:data,
        id:id
    }
}

export const LogOut = () =>{
    return{
        type:LOGOUT,
    }
}