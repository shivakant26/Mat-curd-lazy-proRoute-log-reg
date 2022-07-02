import { LOGIN, LOGIN_SUCCESS, REGISTER, REGISTER_SUCCESS } from "../actionType";
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

export function* userSaga(){
    yield takeEvery(REGISTER,userRegister)
    yield takeEvery(LOGIN,userLogin)
}