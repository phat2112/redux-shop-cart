import React, { useState, useEffect } from 'react'
import ShopProduct from '../../atom/Product/index.js'
import { connect } from 'react-redux'
import { addToCart, removeCart } from 'Stores/ShopCart/Actions'
import { ShopCartSelector } from 'Stores/ShopCart/Selectors'
import MyCart from 'Components/atom/Cart'
import './styles.scss';

const ShopPage = ({ addToCart, itemProducts, removeCart }) => {
    const [confirmAdd, setConfirmAdd] = useState(true)
    
    const handleAddToCart = productValue => {
        setConfirmAdd(true)
        addToCart({
            ...productValue,
            quantity: 1,
        })
        // way to add item
        // let checkProduct = null
        // itemProducts.map((item, index) => {
        //     if (item.id === productValue.id) {
        //         return item.quantity+=1
        //     }
        // })
        // checkProduct = itemProducts.find(item => {
        //     return item.id === productValue.id
        // })
        // if (!checkProduct) {
        //     itemProducts.push(productValue)
        // }
        // localStorage.setItem('myCart', JSON.stringify(itemProducts));
        // addToCart(itemProducts)

        // my way to add item
        // Product.map(item => {
        //     if (item.id === productValue.id) {
        //         item.quantity++
        //         if(item.quantity > 1){
        //             item.price += item.price
        //         }
        //     }
        //     return false
        // })
        // console.log('Product', Product)
        // addToCart(Product)
    }
    const handleRemoveCart = itemRemoved => {
        console.log('itemRemove', itemRemoved)
        removeCart(itemRemoved)
    //   way to remove item
    //    const result = itemProducts.filter(item => {
           
    //         return item.id !== itemRemove
    //     })
    //     console.log("result",result)
    //     if(result){
    //     localStorage.setItem('myCart', JSON.stringify(result));
    //     }
    //      removeCart(result)
    }
    const handleShowPopup = () => {}
    // my way to remove item
    // useEffect(() => {
    //     console.log('itemProducts',itemProducts)
    //     const result = itemProducts.filter((item, index) => {
    //         if(item.quantity > 0){
    //            return itemProducts.slice(index, 1)
    //         }
    //     })
    //     setListCart(result)
    // }, [itemProducts])

    //  load dữ liệu đươc lưu vào local store
    useEffect(() => {
        if(itemProducts.length > 0){
            localStorage.getItem(JSON.parse('myCart'))
        }
    }, [])

    // useEffect(() => {
    //     return () => {
    //         ghi các event sẽ chạy khi nó bị unmount
    //     };
    // }, [])
    return (
           <div className='shop-container'>
           <ShopProduct handleAddToCart={handleAddToCart} />
            <button className="popup-cart" onClick={() => handleShowPopup()}>My Cart</button>
            <MyCart itemProducts={itemProducts} handleRemoveCart={handleRemoveCart}/>
           </div>
    )
}
const mapStateToProps = state => ({
    itemProducts: ShopCartSelector.getCart(state),
})
const mapDispatchToProps = dispatch => ({
    addToCart: item => dispatch(addToCart(item)),
    removeCart: item => dispatch(removeCart(item)),
})
 export default connect(mapStateToProps, mapDispatchToProps)(ShopPage)


