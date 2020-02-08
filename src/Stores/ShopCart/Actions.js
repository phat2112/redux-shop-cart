import {ACTION} from './Constant'

const addToCart = product => ({
    type: ACTION.ADD_TO_CART,
    product,
})
const removeCart = productRemoved => ({
    type: ACTION.REMOVE_TO_CART,
    productRemoved
})
export {
    addToCart,
    removeCart,
}