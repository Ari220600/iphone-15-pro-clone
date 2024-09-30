import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import {rightImg, watchImg} from '../utils'
import VideoCarousel from './VideoCarousel'


const Highlights = () => {
  useGSAP(()=>{
    gsap.to("#title",{
        opacity: 1,
        y:0,
    })
    gsap.to(".link",{
        opacity:1,
        y:0,
        duration:1,
        stagger: 0.25
    })
  })
  return (
    <section id='highlights' className='w-screen overflow-hidden h-full common-padding bg-zinc'>
        <div className='screen-max-width'>
            <div className='mb-12 md:flex w-full items-end justify-between'>
                <h1 id="title" className='section-heading'>Get the highlights.</h1>
                <div className='flex flex-wrap items-end gap-5 text-xs'>
                    <p className='link gap-2'>Watch the film
                        <img src={watchImg} alt="watch" />
                    </p>
                    <p className='link gap-2'>Watch the event
                        <img src={rightImg} alt="right" />
                    </p>
                </div>
            </div>
        <VideoCarousel/>
            

        </div>
    </section>
  )
}

export default Highlights
