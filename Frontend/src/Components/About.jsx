import React from 'react'
import { Link } from 'react-scroll'
import { HiOutlineArrowNarrowRight } from "react-icons/hi"


const About = () => {
  return (
      <section className='about' id="about">
          <div className='container'>
              <div className="banner">
                  <div className="top">
                      <h1 className="heading">About Us</h1>
                      <p>The only thing we are serious about is Food.</p>
                  </div>

                  <p className='mid'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus soluta adipisci id provident amet molestiae, magnam dicta expedita veniam, nostrum repellendus deserunt officia et ut eos cumque, blanditiis molestias. Enim.
                  </p>
                  <Link to={"/"}>
                      Explore Menu
                      <span>
                          <HiOutlineArrowNarrowRight/>
                      </span>
                  </Link>
              </div>
              <div className="banner">
                  <img src='/about.png' alt="about"/>
              </div>
          </div>
      
    </section>
  )
}

export default About
