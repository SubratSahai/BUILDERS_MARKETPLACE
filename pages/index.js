import React from 'react';

import { client } from '../lib/clients';
import { Product, FooterBanner, HeroBanner } from '../components';
import Link from 'next/link';
import { urlFor } from '../lib/clients';
const Home = ({ products, bannerData }) => (
  <div className='all'>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]}  />
    <div className="products-heading">
      <h2>All Products</h2>
      <p>Building material of several variation</p>
    </div>

    <div className="products-container">
      {
        products.map((ev)=>(
          <Link href={`/product/${ev.slug.current}`}>
          <div className="product-card">
            <img 
              src={urlFor(ev.image && ev.image[0])}
              width={250}
              height={250}s
              className="product-image"
            />
            <p className="product-name">{ev.name}</p>
            <p className="product-price">${ev.price}</p>
          </div>
        </Link>
        ))
      }
      
      {/* { <Link href={`${products[0].slug.current}`}>
        <div className="product-card">
          <img 
            src={urlFor(products[0].image && products[0].image[0])}
            width={250}
            height={250}s
            className="product-image"
          />
          <p className="product-name">{products[0].name}</p>
          <p className="product-price">${products[0].price}</p>
        </div>
      </Link>}
      { <Link href={`${products[1].slug.current}`}>
        <div className="product-card">
          <img 
            src={urlFor(products[1].image && products[1].image[0])}
            width={250}
            height={250}s
            className="product-image"
          />
          <p className="product-name">{products[1].name}</p>
          <p className="product-price">${products[1].price}</p>
        </div>
      </Link>}
      {console.log(products)} */}
    </div>

    <FooterBanner/>
  </div>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

export default Home;