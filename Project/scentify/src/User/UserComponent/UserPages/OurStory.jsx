import React from 'react'
import perfume from '../Images/perfume1.png'
import perfum1 from '../Images/perfum.png'
import './Story.css'

const OurStory = () => {
  return (
    <div className='story'>
      <div className='story-start'>
        <div className='story-start-img'>
          <img src={perfume} alt=""  className='story-start-img-img'/>
        </div>
        <div className='story-start-para'>
          <h3 className='story-start-para-h'>Our Little Story</h3>
          <p className='story-start-para-p'>
          Scentify is your premier online destination for indulging in the world of exquisite fragrances. As a dedicated perfume purchasing website, Scentify offers an unparalleled shopping experience for those who appreciate the artistry and allure of fine scents.
          At Scentify, we curate a vast collection of the finest perfumes from renowned brands and niche fragrance houses. Our carefully selected range caters to diverse preferences, ensuring that every customer finds their perfect scent. Whether you're drawn to timeless classics, seeking the latest trends, or exploring unique and rare fragrances, Scentify has something for everyone.
          </p>
        </div>
      </div>
    {/* <div className='story-end'>
      <div className='story-end-para'>
        <p>Perfumes are a common and necessary cosmetic in our daily life. They are popular both for men and women since these cosmetics give users a pleasant feeling through their beautiful fragrance.</p>
      </div>
      <div className='story-end-img'>
        <img src={perfum1} alt="" className='story-end-img-img'/>
      </div> */}
    {/* </div> */}
    </div>
  )
}

export default OurStory
