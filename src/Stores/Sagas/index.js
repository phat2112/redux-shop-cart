import {all} from 'redux-saga/effects'
import userLogin from 'Stores/Authentication/Sagas'

export default function* rootSaga(){
	yield all([
		userLogin(),
	])
}
