import {combineReducers} from 'redux'
import ShopCartReducers from '../ShopCart/Reducers'
import {AuthReducer} from 'Stores/Authentication/Reducers'

const rootReducer = combineReducers({
    shopCart: ShopCartReducers,
    loginReducer: AuthReducer.LoginReducer
})
export default rootReducer