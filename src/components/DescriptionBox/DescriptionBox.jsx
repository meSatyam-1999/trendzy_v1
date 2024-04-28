import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='description-box'>
        <div className='descriptionbox-navigator'>
            <div className='descriptionbox-nav-box'>Description</div>
            <div className='descriptionbox-nav-box fade'>Reviews (84)</div>
        </div>
        <div className='descriptionbox-description'>
            <p>An E-Commerce website is an online destination where buyers shop for goods and sellers offer products and services. It’s the hub of information about a company and what they sell. On an eCommerce website, you’ll find product listings, eCommerce blog content, company history, and contact information.</p>
            <p>The E-Commerce website definition is any website that sells products or services through the Internet. As you may imagine, there are millions of eCommerce sites that sell all kinds of products. Thousands of eCommerce success stories exist with the B2B business model, some are B2C examples, and still, others sell direct to consumer.</p>
        </div>
    </div>
  )
}

export default DescriptionBox