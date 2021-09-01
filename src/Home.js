import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {
    return (
      <div className="home">
        <div className="home__container">
          <img
            className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt=""
          />
        </div>
        <div className="home__row">
          <Product
            id="001"
            title="New Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage, 2.6GHz Intel Core i7) - Space Gray"
            price={2149.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71pC69I3lzL._AC_SL1500_.jpg"
          />
          <Product
            id="002"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi + Cellular, 256GB) - Space Gray (4th Generation)"
            price={1209.95}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81Pi4nhjlwL._AC_SL1500_.jpg"
          />
          {/* Product */}
          {/* Product */}
        </div>
        <div className="home__row">
          {/* Product */}
          <Product
            id="023"
            title="Chasdi Xbox One Wireless Controller Compatible with Xbox one, S, X and PC with 2.4Ghz Connection"
            price={52.38}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/41LO2OX6pRL.jpg"
          />
          <Product
            id="022"
            title="Echo Dot (3rd Gen) – Smart speaker with Alexa (Black)"
            price={49.99}
            rating={5}
            image="https://images-eu.ssl-images-amazon.com/images/G/31/PR/379x304_50_CC_Alexa-in-Hindi._SY304_CB404382407_.jpg"
          />

          <Product
            id="021"
            title="APEX AM-5002 Apollo Medium Back Office Chair"
            price={79.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/41R3mwMl-VL.jpg"
          />
          {/* Product */}
          {/* Product */}
        </div>
        <div className="home__row">
          {/* Product */}
          <Product
            id="031"
            title="Sceptre 30-inch Curved Gaming Monitor 21:9 2560x1080 Ultra Wide Ultra Slim HDMI DisplayPort up to 200Hz Build-in Speakers, Metal Black (C305B-200UN)"
            price={278.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81Wt3h7-V2L._AC_SL1500_.jpg"
          />
          {/* <Product /> */}
        </div>
        <div className="home__row">
          {/* Product */}
          <Product
            id="023"
            title="Chasdi Xbox One Wireless Controller Compatible with Xbox one, S, X and PC with 2.4Ghz Connection"
            price={52.38}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/41LO2OX6pRL.jpg"
          />
          <Product
            id="022"
            title="Echo Dot (3rd Gen) – Smart speaker with Alexa (Black)"
            price={49.99}
            rating={5}
            image="https://images-eu.ssl-images-amazon.com/images/G/31/PR/379x304_50_CC_Alexa-in-Hindi._SY304_CB404382407_.jpg"
          />

          <Product
            id="021"
            title="APEX AM-5002 Apollo Medium Back Office Chair"
            price={79.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/41R3mwMl-VL.jpg"
          />
        </div>
      </div>
    );
}

export default Home
