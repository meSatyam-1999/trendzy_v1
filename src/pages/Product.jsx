import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrums from '../components/Breadcrums/Breadcrums';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../components/RelatedProducts/RelatedProducts';
import Footer from '../components/Footer/Footer';

const Product = () => {
const {all_product} = useContext(ShopContext);
const {productId} = useParams();
const product = all_product.find((e)=> e.id === Number(productId));

return (
    <div>
        <Breadcrums product={product} />
        <ProductDisplay product={product} />
        <DescriptionBox />
        <RelatedProducts />
        <Footer />
    </div>
  )
}

export default Product