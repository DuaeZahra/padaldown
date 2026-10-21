'use client'
import { useEffect, useState } from 'react'
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
        <h2 className='mb-14'>Why work with us</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10'>
          {reasons.map((item, i) => (
            <div key={i} className='border-t border-black/15 pt-6'>
              <h5 className='mb-3'>{item.heading}</h5>
              <p className='text-lg text-black/65'>{item.paragraph}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyUs
