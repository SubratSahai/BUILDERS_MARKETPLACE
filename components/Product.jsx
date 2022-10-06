import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/clients';
 
 const Product = (products) => {
   return (
     <div>
       <Link href={`${products.slug.current}`}>
          <div className="product-card">
            <img 
              src={urlFor(products.image && products.image[0])}
              width={250}
              height={250}s
              className="product-image"
            />
            <p className="product-name">{products.name}</p>
            <p className="product-price">${products.price}</p>
          </div>
        </Link>
     </div>
   )
 }
 
 export default Product