import {USER_ACTION} from './constant'

const handleLogin = value => ({
    type: USER_ACTION.LOGIN,
    value
})
const handleLoginSuccess = token => ({
    type: USER_ACTION.LOGIN_SUCCESS,
    token
})
const handleLoginFail = error => ({
    type: USER_ACTION.LOGIN_FAIL,
    error
})

export {
    handleLogin,
    handleLoginSuccess,
    handleLoginFail,
}