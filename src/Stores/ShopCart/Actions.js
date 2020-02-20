import {ACTION} from './Constant'

const addToCart = product => ({
    type: ACTION.ADD_TO_CART,
    product,
})
const removeCart = productRemoved => ({
    type: ACTION.REMOVE_TO_CART,
    productRemoved
})
const total = valueItem => ({
    type: ACTION.SET_TOTAL,
    valueItem,
})
export {
    addToCart,
    removeCart,
    total,
}