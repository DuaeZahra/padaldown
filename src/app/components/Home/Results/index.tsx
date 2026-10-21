'use client'
import { useEffect, useState } from 'react'
import { resultdata } from '@/app/types/resultdata'

const Results = () => {
  // fetch results data
  const [results, setResults] = useState<resultdata[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setResults(data.ResultsData)
      } catch (error) {
        console.error('Error fetching results:', error)
      }
    }
    fetchData()
  }, [])

  return (
    <section className="relative bg-cover bg-center overflow-hidden before:absolute before:w-full before:h-full before:bg-[url('/images/wework/elipse.svg')] before:bg-no-repeat before:bg-center before:-z-10">
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='text-center'>
          <p className='text-primary text-lg tracking-widest uppercase'>
            measurable results
          </p>
          <h2 className='my-3'>Numbers, not promises.</h2>
        </div>
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-6 mt-16'>
          {results.map((item, i) => (
            <div
              key={i}
              className='bg-white shadow-testimonial border border-border rounded-3xl p-6 sm:p-10 text-center'>
              <p className='text-4xl sm:text-6xl font-extrabold text-primary mb-3'>
                {item.value}
              </p>
              <p className='text-base sm:text-lg font-medium text-black mb-2'>
                {item.label}
              </p>
              <p className='text-sm text-black/50'>{item.project}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Results
