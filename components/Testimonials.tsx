import React from 'react'
import { Spotlight } from './utils/Spotlight'
import TestimonialCard from './utils/TestimonialCard'
import icon from "../assets/icon.svg"
import photo from "../assets/photo.svg"

const Testimonials = () => {
  return (
    <section className='pt-20 pb-16 '>
     
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      
       
      <div className='max-w-5xl mx-auto sm:flex  justify-between'>
      
      <div>
    <h2 className='md:text-2xl text-2xl font-gilroy md:pb-2 lg:pb-2 lg:text-4xl'>
      Read from our <span className='font-gilroy' style={{ color: '#F79C00' }}>Satisfied clients</span>
    </h2>
    <p className=' font-futura text-xl mb-4  md:text-2xl'>Our Clients are at the core of everything we do</p>
   
  </div>
        <div className='flex gap-8 border-[#222327] '>
            <TestimonialCard 
            photoUrl={photo}
           iconUrl={icon}
           name="Mukesh"
           content="Collaborating with Aanyaa Softek was indeed a great experience. Their business development team was exceptionally thorough during our meetings, ensuring they understood our needs perfectly. "/>
            <TestimonialCard 
            photoUrl={photo}
           iconUrl={icon}
           name="Rajiv Ranjan"
           content="They developed a highly interactive website with outstanding UI/UX design, all in a truly agile manner. The result? A remarkable increase in customer engagement and satisfaction. Couldn't be happier! "/>
            </div>
      </div>
     
      
    </section>
    
      
  )
}

export default Testimonials


