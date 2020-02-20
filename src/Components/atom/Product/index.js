import React from 'react'
import { Product } from 'Utils/items'
// import Iphone from 'Assets/images/Iphone.jpg'
// import Nokia from 'Assets/images/Nokia.jpg'
// import Sony from 'Assets/images/Sony.jpg'
// import Samsung from 'Assets/images/Samsung.jpg'
import {useHistory} from 'react-router-dom'
import './styles.scss'

const ShopProduct = ({ handleAddToCart }) => {
    const history = useHistory()
    return (
        <div className="Product">
            <div className='Product-title'>
                <h1>List Product</h1>
            </div>
            <div className='Product-container'>
                <div className='Product-item'>
                    <table>
                        <thead>
                            <tr>
                                <td><h1>Id</h1></td>
                                <td><h1>Name</h1></td>
                                <td><h1>Price</h1></td>
                                <td><h1>Quantity</h1></td>
                            </tr>
                        </thead>
                        <tbody>
                            {Product.map((item, index) => (
                                <tr key={index} className='Product-detail'>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.price}$</td>
                                    <td className='Product-option'>
                                        <button onClick={() => handleAddToCart(item)}>
                                            Add to Cart
                                            </button>
                                    </td>
                                </tr>
                            ))
                            }
                        </tbody>
                    </table>

                </div>

            </div>
        </div>
    )
}

export default ShopProduct