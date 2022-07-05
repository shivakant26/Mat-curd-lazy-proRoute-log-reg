import { DELETE, DELETE_SUCCESS, EDIT, EDIT_SUCCESS, LOGIN, LOGIN_SUCCESS, LOGOUT, LOGOUT_SUCCESS, REGISTER, REGISTER_SUCCESS, UPDATE, UPDATE_SUCCESS } from "../actionType";
import { takeEvery , put} from "redux-saga/effects";

function * userRegister(action){
    yield put({
        type:REGISTER_SUCCESS,
        payload:action.payload
    })
}

function * userLogin(action){
    yield put({
        type:LOGIN_SUCCESS,
        payload:action.payload
    })
}

function * delete_User(action){
    yield put({
        type:DELETE_SUCCESS,
        payload:action.payload
    })
}

function * edit_User(action){
    yield put({
        type:EDIT_SUCCESS,
        payload:action.payload
    })
}

function * update_User(action){
    yield put({
        type:UPDATE_SUCCESS,
        payload:action.payload,
        id:action.id
    })
}


function * Logout_User(){
    yield put({
        type:LOGOUT_SUCCESS,
    })
}

export function* userSaga(){
    yield takeEvery(REGISTER,userRegister)
    yield takeEvery(LOGIN,userLogin)
    yield takeEvery(DELETE,delete_User)
    yield takeEvery(EDIT,edit_User)
    yield takeEvery(UPDATE,update_User)
    yield takeEvery(LOGOUT,Logout_User)
}