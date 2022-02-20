import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
  return (
    <div className='home'>

    <div className='home__container'>
        <img className='home__image' alt='hero' src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'></img>


        <div className='home__row'>
    {/* Product */}
    <Product id="9891234312" title="The lean startup" price={29.00} image="https://images-eu.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" rating={5}/>
    <Product  id="9491234312" title="ikigai" price={9.00} image="https://images-eu.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" rating={5}/>
    
    {/* Product */}
    </div>

    <div className='home__row'>
    {/* Product */}
    <Product id="9891234312"title="The lean startup" price={29.00} image="https://images-eu.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" rating={4}/>
    <Product id="9891234322" title="The lean startup" price={29.00} image="https://images-eu.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" rating={2}/>
    <Product id="9891234352"title="The lean startup" price={29.00} image="https://images-eu.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" rating={3}/>
    

    {/* Product */}
    {/* Product */}
    
    </div>

    <div className='home__row'>
    {/* Product */}
    <Product id="9891234712" title="The lean startup" price={29.00} image="https://images-eu.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" rating={4}/>
    
    
    </div>
    </div>

  




    </div>

  )
}

export default Home