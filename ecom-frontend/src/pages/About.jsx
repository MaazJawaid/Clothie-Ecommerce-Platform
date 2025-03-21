import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Clothie was created out of a passion for changing the way people shop online. Our journey started with a simple yet powerful idea: to build a platform where customers can easily find, explore, and purchase a wide array of products from the comfort of their homes.</p>
          <p>Since the beginning, we've worked diligently to assemble a wide range of top-quality products that appeal to all tastes and preferences. Whether it's fashion, beauty, electronics, or home goods, our offerings come from trusted brands and suppliers.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>At Clothie, our vision is to provide customers with endless choices, ultimate convenience, and confidence in every purchase. We strive to deliver an exceptional shopping experience that goes beyond expectations, from browsing and ordering to timely delivery and more.</p>
        </div>
      </div>

      <div className=' text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Uncompromising Quality:</b>
          <p className='text-gray-600'>Every item undergoes a thorough selection process to guarantee it meets our high-quality standards.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Effortless Shopping Experience:</b>
          <p className='text-gray-600'>Enjoy a seamless shopping journey with our intuitive interface and simple ordering process, making shopping more convenient than ever.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Outstanding Customer Support:</b>
          <p className='text-gray-600'>Our dedicated support team is always available to assist you, ensuring that your satisfaction is our highest priority.</p>
        </div>
      </div>

      <NewsletterBox />

    </div>
  )
}

export default About
