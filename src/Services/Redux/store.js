import { applyMiddleware, legacy_createStore } from "redux";
import rootSaga from "./Saga";
import createSagaMiddleware from "@redux-saga/core";
import rootReducer from "./Reducer";
const sagaMiddleware = createSagaMiddleware();
const store = legacy_createStore(rootReducer,applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga);

export default store;