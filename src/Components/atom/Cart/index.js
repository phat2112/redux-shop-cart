import React from 'react'

const MyCart = ({itemProducts,handleRemoveCart}) => {
    return (
        <div className='list-shop-cart'>
            <h1>Your Total</h1>
            <table>
                <thead>
                    <tr>
                        <td><h3>Name</h3></td>
                        <td><h3>Price</h3></td>
                        <td><h3>Quantity</h3></td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {itemProducts && itemProducts.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.quantity}</td>
                            <td><button onClick={() => handleRemoveCart(item)}>remove Cart</button></td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>
        </div>
    )
}
export default MyCart