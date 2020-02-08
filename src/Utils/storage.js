export const storeCart = cartValue => {
    localStorage.setItem('myCart', JSON.stringify(cartValue))
}
