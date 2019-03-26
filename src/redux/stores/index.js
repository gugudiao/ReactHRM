import { createStore , applyMiddleware } from 'redux';
import reducer from './../reducers/mainReducer';
import createSagaMiddleware from "redux-saga";
import routeSaga from "./../../services/sagas/index";
import 'regenerator-runtime/runtime';

const initialState = {
    menuName: '',
    contentColor : 'black'
}

const sagaMiddleware = createSagaMiddleware();
const allStore = ()=>createStore(reducer,initialState,applyMiddleware(sagaMiddleware));

//sagaMiddleware.run(routeSaga);

export default allStore;