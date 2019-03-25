import { createStore } from 'redux';
import reducer from './../reducers/mainReducer';

const initialState = {
    menuName: '',
    contentColor : 'black'
}

const allStore = ()=>createStore(reducer,initialState);

export default allStore;