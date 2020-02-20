export const storeCart = cartValue => {
    localStorage.setItem('myCart', JSON.stringify(cartValue))
}
export const storeKeyCart = cartKey => {
    localStorage.setItem('keyCart', JSON.stringify(cartKey))

}