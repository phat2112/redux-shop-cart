import {combineReducers} from 'redux'
import ShopCartReducers from '../ShopCart/Reducers'

const rootReducer = combineReducers({
    shopCart: ShopCartReducers,
})
export default rootReducer