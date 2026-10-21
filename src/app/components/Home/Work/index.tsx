'use client'
import React, { useEffect, useState } from 'react'
import { workdata } from '@/app/types/workdata'

const Work = () => {
  // fetch tech-stack data
  const [work, setWork] = useState<workdata[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setWork(data.WorkData)
      } catch (error) {
        console.error('Error fetching services:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <section id='Stack' className='scroll-mt-20'>
      <div className='container mx-auto max-w-7xl px-4'>
        <h2 className='mb-14'>Technology</h2>
        <dl className='border-t border-black/10'>
          {work.map((items, i) => (
            <div
              key={i}
              className='grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8 py-5 border-b border-black/10'>
              <dt className='md:col-span-3 text-lg font-semibold text-black'>
                {items.category}
              </dt>
              <dd className='md:col-span-9 text-lg text-black/65'>
                {items.items.join(', ')}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
export default Work
