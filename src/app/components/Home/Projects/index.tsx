'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'
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
        <div className='text-center'>
          <p className='text-primary text-lg tracking-widest uppercase'>
            flagship projects
          </p>
          <h2 className='max-w-4xl mx-auto'>Delivered solutions.</h2>
          <p className='text-xl text-black/55 max-w-3xl mx-auto mt-6'>
            Production systems and research work across healthcare, fintech,
            education, e-commerce and AI research.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16'>
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
                  className='flex flex-col shadow-manage-shadow border border-border p-8 rounded-3xl hover:border-primary duration-300'>
                  <div className='flex items-center justify-between mb-5'>
                    <span className='text-sm font-semibold text-primary bg-primary/10 py-1.5 px-3 rounded-full'>
                      {item.domain}
                    </span>
                    <span className='text-sm font-bold text-black/30'>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h5 className='mb-5 leading-snug'>{item.title}</h5>
                  <ul className='space-y-3 mb-6 grow'>
                    {item.points.map((point, j) => (
                      <li
                        key={j}
                        className='flex items-start gap-2 text-base text-black/70'>
                        <Icon
                          icon='tabler:point-filled'
                          width='18'
                          height='18'
                          className='text-primary shrink-0 mt-1'
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className='flex flex-wrap gap-2 pt-5 border-t border-border'>
                    {item.stack.map((tool, j) => (
                      <span
                        key={j}
                        className='text-xs font-medium bg-grey text-black/70 py-1 px-2.5 rounded-full'>
                        {tool}
                      </span>
                    ))}
                  </div>
                  {item.link && (
                    <Link
                      href={item.link.href}
                      target='_blank'
                      className='mt-5 text-base font-semibold text-primary hover:underline flex items-center gap-1'>
                      Live at {item.link.label}
                      <Icon icon='tabler:arrow-up-right' width='18' height='18' />
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
