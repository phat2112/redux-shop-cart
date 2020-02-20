import React,{useState, useEffect} from 'react'
import Nokia from 'Assets/images/Nokia.jpg'
import Samsung from 'Assets/images/Samsung.jpg'
import Sony from 'Assets/images/Sony.jpg'
import Iphone from 'Assets/images/Iphone.jpg'
import {Product} from 'Utils/items'
import {Icon} from 'antd'
import {useHistory} from 'react-router-dom'
import './style.scss'

const CartItem = ({match}) => {
    const [item, setItem] = useState({
        name: '',
        price: 0,
    })
    let history = useHistory()
    const [quantity, setQuantity] = useState(1)
    const itemId = parseInt(match.params.id)
    const handleFill = (id, colorFill) => {
        console.log(id, colorFill)
        let idIcon = document.getElementById(id)
        // idIcon.style.color = colorFill-
        console.log(idIcon)
        if(idIcon.style.color === 'black' ) {
            console.log('aaaaaaa')
            idIcon.style.color = colorFill
        }else{
            idIcon.style.color = 'black'
        }
        // console.log('222222')
    }
    const handleLinkProduct = () => {
        history.push('/product-detail')
    }
    useEffect(() => {
        let result = Product.find(item => item.id === itemId)
        if(result){
            setItem({name: result.name, price: result.price})
        }
        if(quantity <=1){
            setQuantity(1)
        }
    }, [Product, quantity])

    return (
        <div className="shop-product-container">
           <div className="shop-product" onClick={() => handleLinkProduct()}>
               <div className="shop-product-image">
                    <img src={Nokia} alt=""/>
               </div>
               <div className="shop-product-info">
                   <div className="shop-content">
                       <p><h4>Name:</h4> Nokia</p>
                       <p><h4>Price:</h4> 200$</p>
                   </div>
               </div>
               <div className="option-button">
                   <button className='icon-button ' id='icon-like' onClick={() => handleFill('icon-like', 'blue')} ><Icon type="like" /></button>
                   <button className='icon-button' id='icon-love' onClick={() => handleFill('icon-love', 'red')}><Icon type="heart" /></button>
                   <button className='buy-button'>Buy</button>
               </div>
           </div>
           <div className="shop-product">
               <div className="shop-product-image">
                    <img src={Samsung} alt=""/>
               </div>
               <div className="shop-product-info">
                   <div className="shop-content">
                   <p><h4>Name:</h4> Samsung</p>
                       <p><h4>Price:</h4> 400$</p>
                   </div>
               </div>
               <div className="option-button">
                   <button className='icon-button' id='icon-like-2' onClick={() => handleFill('icon-like-2', 'blue')} ><Icon type="like" /></button>
                   <button className='icon-button' id='icon-love-2' onClick={() => handleFill('icon-love-2', 'red')}><Icon type="heart" /></button>
                   <button className='buy-button'>Buy</button>
               </div>
           </div>
           <div className="shop-product">
               <div className="shop-product-image">
                    <img src={Sony} alt=""/>
               </div>
               <div className="shop-product-info">
                   <div className="shop-content">
                   <p><h4>Name:</h4> Sony</p>
                       <p><h4>Price:</h4> 300$</p>
                   </div>
               </div>
               <div className="option-button">
                   <button className='icon-button' id='icon-like-3' onClick={() => handleFill('icon-like-3', 'blue')} ><Icon type="like" /></button>
                   <button className='icon-button' id='icon-love-3' onClick={() => handleFill('icon-love-3', 'red')}><Icon type="heart" /></button>
                   <button className='buy-button'>Buy</button>
               </div>
           </div>
           <div className="shop-product">
               <div className="shop-product-image">
                    <img src={Iphone} alt=""/>
               </div>
               <div className="shop-product-info">
                   <div className="shop-content">
                        <p><h4>Name:</h4> Iphone</p>
                       <p><h4>Price:</h4> 1000$</p>
                   </div>
               </div>
               <div className="option-button">
                   <button className='icon-button' id='icon-like-4' onClick={() => handleFill('icon-like-4', 'blue')} ><Icon type="like" /></button>
                   <button className='icon-button' id='icon-love-4' onClick={() => handleFill('icon-love-4', 'red')}><Icon type="heart" /></button>
                   <button className='buy-button'>Buy</button>
               </div>
           </div>
        </div>
    )
}
export default CartItem

