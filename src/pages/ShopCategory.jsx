import React from 'react'
import './CSS/ShopCategory.css'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import dropdown_icon from '../components/Assets/dropdown_icon.png'
import Item from '../components/Item/Item'
import Footer from '../components/Footer/Footer'

const ShopCategory = (props) => {

  const {all_product} = useContext(ShopContext);

  return (
    <div className='shop-category'>
        <img className='shopcategory-banner' src={props.banner} alt='' />

        <div className='shopcategory-indexsort'>
            <p>
              <span>Showing 1-12</span> Out of 36 Products
            </p>
            <div className='shopcategory-sort'>
                Sort by <img src={dropdown_icon} alt='' />
            </div>
        </div>

        <div className='shopcategory-products'>
            {all_product.map((item,i)=>{
                if(props.category === item.category) {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                }
                else {
                  return null;
                }
            })}
        </div>

              <div className='load-more'>
                  <button>Explore More</button>
              </div>

        <Footer />
    </div>
  )
}

export default ShopCategory