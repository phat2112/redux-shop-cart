const getCart = state =>{
    return state['shopCart'].cart
} 
const getTotalValue = state => state['shopCart'].totalValue
export const ShopCartSelector = {
    getCart,
    getTotalValue,
}