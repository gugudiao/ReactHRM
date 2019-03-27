import 'regenerator-runtime/runtime';
import { takeEvery } from 'redux-saga/effects';
import { axiosHelloTest } from './testSagas'

export default function* routeSaga(){

    //样例
    yield takeEvery("SAGA_GET_HELLO_TEST",axiosHelloTest);
}