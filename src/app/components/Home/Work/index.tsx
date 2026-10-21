'use client'
import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import { workdata } from '@/app/types/workdata'
import WorkSkeleton from '../../Skeleton/Work'

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  speed: 4000,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
  ],
}

const Work = () => {
  // fetch tech-stack data
  const [work, setWork] = useState<workdata[]>([])
  const [loading, setLoding] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setWork(data.WorkData)
      } catch (error) {
        console.error('Error fetching services:', error)
      } finally {
        setLoding(false)
      }
    }

    fetchData()
  }, [])

  return (
    <section
      id='Stack'
      className="relative scroll-mt-20 dark:bg-darkmode py-4 bg-cover bg-center overflow-hidden before:absolute before:w-full before:h-full before:bg-[url('/images/wework/elipse.svg')] before:bg-no-repeat before:bg-center after:absolute after:w-1/3 after:h-1/3 after:bg-[url('/images/wework/vector.svg')] after:bg-no-repeat after:top-28 after:-right-12 after:-z-10">
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='text-center overflow-hidden'>
          <p className='text-primary text-lg tracking-widest uppercase mt-10'>
            technology stack
          </p>
          <h3 className='text-black my-5'>The tools we ship with.</h3>
        </div>
      </div>

      <Slider {...settings}>
        {loading
          ? Array.from({ length: 4 }).map((_, i) => <WorkSkeleton key={i} />)
          : work.map((items, i) => (
              <div key={i}>
                <div className='bg-white dark:bg-darkHeroBg m-3 p-8 my-10 shadow-xl rounded-3xl min-h-72'>
                  <div className='w-14 h-14 rounded-2xl bg-primary/15 flex items-center justify-center mb-6'>
                    <Icon
                      icon={items.icon}
                      width='30'
                      height='30'
                      className='text-primary'
                    />
                  </div>
                  <h6 className='text-xl text-black dark:text-white font-bold mb-5'>
                    {items.category}
                  </h6>
                  <div className='flex flex-wrap gap-2'>
                    {items.items.map((tool, j) => (
                      <span
                        key={j}
                        className='text-sm font-medium bg-grey text-black/80 py-1.5 px-3 rounded-full'>
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
      </Slider>
    </section>
  )
}
export default Work
