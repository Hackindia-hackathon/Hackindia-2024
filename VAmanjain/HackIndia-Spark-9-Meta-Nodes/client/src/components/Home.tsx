  import React from 'react'
  import { Vortex } from './ui/vortex'
  import ShimmerButton from './ui/shimmer-button'
  import Marquee from './ui/marquee'
  
  import { StickyScrollRevealDemo } from './StickyScrollRevealDemo'
import { BentoDemo } from './BentoDemo'
import { LandingPageComponent } from './landing-page1'



  

  const Home = () => {
    return (
      <>
{/*       
      <div className="w-full mx-auto   h-screen overflow-hidden gap-[1rem] rounded-b-xl ">
        <Vortex
          backgroundColor=""
          className="flex   items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
        >
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-[#535bf2] to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
          Certification is your ID
        </span>

          <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
            This is chemical burn. It&apos;ll hurt more than you&apos;ve ever been
            burned and you&apos;ll have a scar.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <ShimmerButton>Get Started</ShimmerButton>
            <button className="px-4 py-2  text-white ">Watch trailer</button>
          </div>
        </Vortex>
      </div>

      <MarqueeDemo/>
      <BentoDemo/>
      <StickyScrollRevealDemo/> */}

      <LandingPageComponent/>

      </>
    )
  }

  export default Home