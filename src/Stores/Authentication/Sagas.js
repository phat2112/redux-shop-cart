import { call, put, takeLatest } from 'redux-saga/effects'
import {handleLoginSuccess, handleLoginFail} from './Actions'
import {AuthServices} from 'Services/Authenticate'
import {USER_ACTION} from './constant'

function* getUserLogin({value}){
    try{
        console.log('value',value)
      const resp = yield call(AuthServices.handleUserLogin, value)
        yield put(handleLoginSuccess(resp))
    }
    catch(err){
        yield put(handleLoginFail(err))
    }
}
export default function* watcher(){
    yield takeLatest(USER_ACTION.LOGIN, getUserLogin)
}