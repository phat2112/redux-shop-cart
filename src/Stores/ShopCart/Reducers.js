import { ACTION } from './Constant'
import INITIAL_STATE from './States'
import {storeCart} from 'Utils/storage'

const ShopCartReducers = (state = INITIAL_STATE, action) => {
    console.log('action',action)
    switch (action.type) {
        case ACTION.ADD_TO_CART:
            // add item in reducer
            let newItems = Object.assign({}, action.product)
            // let newItems = action.product
            let newCart = [...state.cart] 
            if(newCart.length > 0){
               const itemAdded =  newCart.find(item =>  item.id === newItems.id)
               if(!itemAdded){
                   newCart.push(newItems)
               }else{
                itemAdded.quantity += newItems.quantity
               }
            storeCart(newCart)
            }else{
                newCart.push(newItems)
            }
            // console.log('state', state)
            // let newCart = [...state.cart]
            // newCart.push(action.product)
            return {
                    ...state,
                    cart: newCart,
            }
        case ACTION.REMOVE_TO_CART:
            //remove item
            let cartRemoved = Object.assign([], action.productRemoved)
            let currentCart= [...state.cart]
            if(currentCart.length > 0){
                let newCartAfterRemove = currentCart.filter(item => item.id !== cartRemoved.id)
                storeCart(newCartAfterRemove)
                return{
                    ...state,
                    cart: newCartAfterRemove,
                }
            }
            return {
                  ...state, 
            }
        case ACTION.SET_TOTAL:
            let newTotalValue = action.valueItem.price * action.valueItem.quantity
            return{
                ...state,
                totalValue: newTotalValue,
            }
        default:
            return state

    }
}
export default ShopCartReducers
