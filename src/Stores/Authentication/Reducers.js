import {USER_ACTION} from './constant'
import INITIAL_STATE from './States'

const LoginReducer = (state = INITIAL_STATE, action ) => {
    console.log(action)
    switch(action.type){
        case USER_ACTION.LOGIN_SUCCESS:
            localStorage.setItem('token', JSON.stringify(action.token.token))
            return {
                token: action.token,
            }
        default :
             return state
    }
}
export const AuthReducer = {
    LoginReducer
}