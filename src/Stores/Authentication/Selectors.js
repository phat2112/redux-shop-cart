const getUserToken = state => state['loginReducer'].token

export const AuthSelector = {
    getUserToken,
}