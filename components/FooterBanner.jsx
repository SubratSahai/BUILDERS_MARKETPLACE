import React from 'react'
const FooterBanner = () => {
  
  const routeChange = () =>{ 
   location.href='https://www.google.com'
  }
  return (
    <div className='footer-banner-container'>
      <div className='banner-desc'>
        <div className='left'>
            <p>All the prices mentioned above are demo prices</p>
            <h3>PLEASE REFER DLR2 FOR THE GOVERNMENT APROVED PRICES OF EVERTHING</h3>
        </div>
        <div className='right'>
          <button onClick={routeChange}>DLR2 SITE</button>
        </div>

      </div>

    </div>
  )
}

export default FooterBanner