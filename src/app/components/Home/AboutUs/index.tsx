'use client'
import { useEffect, useState } from 'react'
import { aboutdata } from '@/app/types/aboutdata'
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
    <section id='Services' className='scroll-mt-20'>
      <div className='container mx-auto max-w-7xl px-4'>
        <h2 className='pb-4'>Services</h2>
        <p className='text-xl text-black/60 max-w-2xl'>
          Three areas we work in, usually together on the same project.
        </p>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-14'>
          {loading
            ? Array.from({ length: 3 }).map((_, index) => (
                <AboutSkeleton key={index} />
              ))
            : about.map((item, i) => (
                <div key={i} className='bg-grey rounded-3xl p-8'>
                  <h5 className='mb-4'>{item.heading}</h5>
                  <p className='text-lg text-black/65 mb-6'>{item.paragraph}</p>
                  <ul className='border-t border-black/10'>
                    {item.items.map((point, j) => (
                      <li
                        key={j}
                        className='py-3 border-b border-black/10 text-base text-black'>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
        </div>
      </div>
    </section>
  )
}

export default Aboutus
