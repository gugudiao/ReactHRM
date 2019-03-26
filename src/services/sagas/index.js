import 'regenerator-runtime/runtime';
import { takeEvery } from 'redux-saga/effects';
import { axiosHelloTest } from './testSagas'

export default function* routeSaga(){

    //样例
    yield takeEvery("Get_Hello_Test",axiosHelloTest);
}