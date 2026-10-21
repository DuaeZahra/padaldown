'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { projectdata } from '@/app/types/projectdata'

const Projects = () => {
  // fetch projects data
  const [projects, setProjects] = useState<projectdata[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setProjects(data.ProjectsData)
      } catch (error) {
        console.error('Error fetching projects:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <section id='Projects' className='relative scroll-mt-20'>
      <div className='container mx-auto max-w-7xl px-4'>
        <h2 className='pb-4'>Projects</h2>
        <p className='text-xl text-black/60 max-w-2xl'>
          A selection of client and research work.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14'>
          {loading
            ? Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className='h-96 animate-pulse rounded-3xl border border-border bg-grey'
                />
              ))
            : projects.map((item, i) => (
                <div
                  key={i}
                  className='flex flex-col border border-black/10 p-8 rounded-3xl'>
                  <p className='text-sm font-medium text-black/50 mb-3'>
                    {item.domain}
                  </p>
                  <h5 className='mb-5 leading-snug'>{item.title}</h5>
                  <ul className='space-y-3 mb-6 grow'>
                    {item.points.map((point, j) => (
                      <li
                        key={j}
                        className='text-base text-black/70'>
                        {point}
                      </li>
                    ))}
                  </ul>
                  <p className='pt-5 border-t border-black/10 text-sm text-black/55'>
                    {item.stack.join(' · ')}
                  </p>
                  {item.link && (
                    <Link
                      href={item.link.href}
                      target='_blank'
                      className='mt-5 text-base font-semibold text-primary hover:underline flex items-center gap-1'>
                      Live at {item.link.label}
                      <span aria-hidden='true'>↗</span>
                    </Link>
                  )}
                </div>
              ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
