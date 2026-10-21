'use client'
import { useEffect, useState } from 'react'
import { aboutdata } from '@/app/types/aboutdata'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import AboutSkeleton from '../../Skeleton/AboutUs'

const Aboutus = () => {
  // fetch services data
  const [about, setAbout] = useState<aboutdata[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setAbout(data.Aboutdata)
      } catch (error) {
        console.error('Error fetching services:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <section id='Services' className='bg-cover bg-center overflow-hidden scroll-mt-20'>
      <div className='container mx-auto max-w-7xl px-4 relative z-1'>
        <div className='p-6 sm:p-12 bg-grey rounded-3xl'>
          <Image
            src='/images/aboutus/dots.svg'
            width={100}
            height={100}
            alt='dots-image'
            className='absolute bottom-1 -left-20'
          />
          <p className='text-center text-primary text-lg tracking-widest uppercase mt-10'>
            our services
          </p>
          <h2 className='text-center pb-12'>What we engineer.</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mt-10'>
            {loading
              ? Array.from({ length: 3 }).map((_, index) => (
                  <AboutSkeleton key={index} />
                ))
              : about.map((item, i) => (
                  <div
                    key={i}
                    className='hover:bg-darkmode bg-white rounded-3xl p-8 shadow-xl group duration-300'>
                    <div className='w-16 h-16 rounded-2xl bg-primary/15 group-hover:bg-white/15 flex items-center justify-center mb-6'>
                      <Icon
                        icon={item.icon}
                        width='34'
                        height='34'
                        className='text-primary group-hover:text-white'
                      />
                    </div>
                    <h5 className='group-hover:text-white mb-4'>
                      {item.heading}
                    </h5>
                    <p className='text-lg font-normal text-black/70 group-hover:text-white/80 mb-6'>
                      {item.paragraph}
                    </p>
                    <ul className='space-y-3'>
                      {item.items.map((point, j) => (
                        <li
                          key={j}
                          className='flex items-start gap-2 text-base text-black group-hover:text-white'>
                          <Icon
                            icon='tabler:circle-check-filled'
                            width='20'
                            height='20'
                            className='text-primary shrink-0 mt-0.5'
                          />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Aboutus
