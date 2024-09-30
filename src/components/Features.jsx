import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import { animateWithGsap } from '../utils/animations'
import { explore1Img, explore2Img, exploreVideo } from '../utils'
import gsap from 'gsap'

const Features = () => {
  useGSAP(() => {
    animateWithGsap('#features_title',{y:0,opacity:1})
    animateWithGsap(".g_grow",{
        scale:1,
        opacity:1,
        ease:"power1",

    },{
        scrub:5.5
    })
    
  },[])

  useGSAP(()=>{
    // gsap.to(".g_text",{y:0,opacity:1,ease:"power2.inOut",duration:1})
    gsap.to("#exploreVideo", {
        scrollTrigger: {
          trigger: "#exploreVideo",
          toggleActions: 'play pause reverse restart',
          start: '-10% bottom',
        },
        onComplete: () => {
            videoRef.current.play()
        }
      })
      animateWithGsap('.g_text', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.inOut'
      })
  })



  const videoRef = useRef();

  return (
    <section className='h-full common-padding bg-zinc relative overflow-hidden'>
        <div className='screen-max-width'>
            <div className='mb-12 w-full'>
                <h1 id='features_title' className='section-heading'>Explore the full story.</h1>
            </div>
            <div className='flex flex-col justify-center items-center overflow-hidden'>
                <div className='mt-32 mb-24 pl-24'>
                    <h2 className='text-5xl lg:text-7xl font-semibold'>iPhone</h2>
                    <h2 className='text-5xl lg:text-7xl font-semibold'>Forged in titanium.</h2>
                </div>
                <div className='flex-col flex-center sm:px-10'>
                    <div className='relative h-[50vh] w-full flex items-center'>
                        <video playsInline id="exploreVideo"
                        className='w-full h-full object-cover object-center'
                        muted
                        preload='none'
                        autoPlay
                        ref={videoRef}>
                            <source src={exploreVideo} type="video/mp4"/>
                        </video>

                    </div>
                    <div className='flex flex-col w-full relative'>
                        <div className='feature-video-container '>
                            <div className='overflow-hidden flex-1 h-[50vh]'>
                                <img src={explore1Img} alt="titanium" className='feature-video g_grow' />

                            </div>
                            <div className='overflow-hidden flex-1 h-[50vh]'>
                                <img src={explore2Img} alt="titanium2" className='feature-video g_grow' />

                            </div>

                        </div>
                        <div className='feature-text-container'>
                            <div className='flex-center flex-1'>
                                <p className='feature-text g_text'>
                                    iPhone 15 Pro is {' '}
                                    <span className='text-white'>
                                        the first iPhone to feature an aerospace grade titanium design using the same aloy that spacecrafts use for missions to Mars. 
                                    </span>
                                </p>
                            </div>
                            <div className='flex-center flex-1'>
                                <p className='feature-text g_text'>
                                    Titanium has one of the best strength-to-weight ratios of any metal, making these are {' '}
                                    <span className='text-white'>
                                        lPro models ever. 
                                    </span>
                                    You'll notice the difference the moment you pick one up.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Features
