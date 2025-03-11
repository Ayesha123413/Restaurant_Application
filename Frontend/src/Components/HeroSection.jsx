import React from 'react'
import "../App.css"
const HeroSection = () => {
  return (
      <section className='heroSection' id="heroSection">
              <div className='container'>
          <div className='banner'>
                  <div className='largeBox'>
                      <h1 className='title'>
                      Delicious
                      </h1>
                  </div>
                  <div className='combined_boxes'>
                      <div className='imageBox'>
                          <img src='hero1.png' alt='hero1'/>
                      </div>
                      <div className='textAndLogo'>
                          <div className="textWithSvg">
                              <h1 className='title'>Food</h1>
                              <h1 className='tite dishes_title'>Dishes</h1>
                              <img src='threelines.svg' alt='three'/>
                          </div>
                          <img src='/logo.png' alt='logo'/>
                      </div>
                  </div>
            </div>
          <div className='banner'>
              <div className="imageBox">
                  <img src='/hero2.png' alt='hero2'/>
              </div>
              <h1 className='title dishes_title'>Dishes</h1>
          </div>
          
          </div>
   </section>
  )
}

export default HeroSection
