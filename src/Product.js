import React from 'react'
import './Product.css'

function product() {
  return (
    <div className='product'>
        <div className="product__info">
            <p>The lean startup</p>
            <p className='product_price'>
                <small>$</small>
                <strong>19.99</strong>
            </p>
            <div className="product__rating">
                <p>🌟</p>
                <p>🌟</p>
                <p>🌟</p>
            </div>
        </div>
        <img src='https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg' alt=''/>
    </div>
  )
}

export default product