import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../context/ShopContext'

const ProductDisplay = (props) => {
    const {product} = props;

    const {addToCart} = useContext(ShopContext);

  return (
    <div className='product-display'>
       
        <div className='product-display-left'>
            <div className='product-display-imagelist'>
                <img src={product.image} alt='' />
                <img src={product.image} alt='' />
                <img src={product.image} alt='' />
                <img src={product.image} alt='' />
            </div>
            <div className='product-display-image'>
            <img className='product-display-main-image' src={product.image} alt='' />
            </div>
        </div>

        <div className='product-display-right'>
            <h1>{product.name}</h1>
            <div className='product-display-right-stars'>
                    <img src={star_icon} alt='' />
                    <img src={star_icon} alt='' />
                    <img src={star_icon} alt='' />
                    <img src={star_icon} alt='' />
                    <img src={star_dull_icon} alt='' />
                    <p>(128)</p>
            </div>
            <div className='product-display-right-prices'>
                <div className='product-display-right-price-old'>₹{product.old_price}</div>
                <div className='product-display-right-price-new'>₹{product.new_price}</div>
            </div>
            <div className='product-display-right-description'>
            Cloth is fabric, a woven material. When you sew your own clothes, you start with a piece of cloth. Cloth is made from some sort of fiber, often cotton or wool, or a synthetic like rayon or polyester.
            </div>
            <div className='product-display-right-size'>
                <h1>Select Size</h1>
                <div className='product-display-right-sizes'>
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <p className='product-display-right-category'><span>Category :</span>Women, T-shirt , Crop Top</p>
            <p className='product-display-right-category'><span>Tags :</span>Modern, Latest</p>
        </div>

    </div>
  )
}

export default ProductDisplay