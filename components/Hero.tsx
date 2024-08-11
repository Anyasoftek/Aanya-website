import React from 'react'
import { Spotlight } from './utils/Spotlight'
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from './MagicButton'
import { TextGenerateEffect } from './utils/TextGenerateEffect'
import { WavyBackground } from './utils/WavyBackground';

const Hero = () => {
  return (
   <section id='hero' className=' pt-16'>
    <WavyBackground >
   
      
      <div className="flex justify-center relative my-20 z-10">
      <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          

          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <TextGenerateEffect
           words={["Your Idea", "Our Expertise"]}
            className="text-center text-[60px] md:text-6xl lg:text-8xl"
          />

          <p className="text-center md:tracking-wider text-orange-100 font-futura mb-4 sm:text-base md:text-lg lg:text-2xl">
          Bringing Software Ideas to Live
          </p>
          <input
          type="text"
          placeholder="Enter your mail"
          className="rounded-lg border md:mb-2 md:p-2 p-2   border-neutral-800 focus:ring-2 focus:ring-lightpurple font-futura  w-full relative z-10 mt-2  bg-neutral-950 placeholder:text-grey"
        />
          <a className='' href="#about">
            <MagicButton
              title="Contact Us"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </WavyBackground>
    
   </section>
  )
}

export default Hero