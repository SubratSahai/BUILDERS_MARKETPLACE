import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/clients'
const HeroBanner = ({heroBanner}) => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className='beats-solo'>{heroBanner.smallText}</p>
        {/* <p>{heroBanner.midText}</p> */}
        <h2>{heroBanner.largeText1}</h2>
        <img src={urlFor(heroBanner.image)} alt="building-materials" 
        className='hero-banner-image'/>

        <div>
          <Link href="/product/ID">
            <button type="button">{heroBanner.buttonText}</button>
          </Link>
          <div className='desc'>
            <b >All the products you need in one place</b>
          </div>
        </div>
      </div>

    </div>
  )
}

export default HeroBanner