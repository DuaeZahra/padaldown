'use client'
import { useEffect, useState } from 'react'
import { Icon } from '@iconify/react'
import { whyusdata } from '@/app/types/whyusdata'

const WhyUs = () => {
  // fetch why-us data
  const [reasons, setReasons] = useState<whyusdata[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setReasons(data.WhyUsData)
      } catch (error) {
        console.error('Error fetching reasons:', error)
      }
    }
    fetchData()
  }, [])

  return (
    <section id='WhyUs' className='scroll-mt-20'>
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='bg-darkmode rounded-3xl p-8 sm:p-16'>
          <p className='text-center text-white/70 text-lg tracking-widest uppercase'>
            why choose us
          </p>
          <h2 className='text-center text-white max-w-4xl mx-auto'>
            Engineering you can measure.
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16'>
            {reasons.map((item, i) => (
              <div
                key={i}
                className='bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 duration-300'>
                <Icon
                  icon={item.icon}
                  width='36'
                  height='36'
                  className='text-primary mb-5'
                />
                <h5 className='text-white mb-3'>{item.heading}</h5>
                <p className='text-base text-white/70'>{item.paragraph}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUs
