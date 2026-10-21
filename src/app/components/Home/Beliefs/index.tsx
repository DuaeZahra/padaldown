'use client'
import React from 'react'
import Link from 'next/link'

const Beliefs = () => {
  return (
    <section id='OpenSource' className='bg-cover bg-center overflow-hidden scroll-mt-20'>
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
          {/* COLUMN-1 */}
          <div className="bg-purple pt-12 px-8 sm:px-20 pb-52 md:pb-70 rounded-3xl bg-[url('/images/beliefs/swirls.svg')] bg-no-repeat bg-right-bottom">
            <p className='text-lg font-normal text-white tracking-widest mb-5 text-center sm:text-start uppercase'>
              open source
            </p>
            <h3 className='text-white mb-5 text-center sm:text-start'>
              pgvector{' '}
              <span className='text-white/60'>
                vectorization, merged upstream.
              </span>
            </h3>
            <p className='text-lg text-white/75 pt-2 mb-16 text-center sm:text-start'>
              We extended pgEdge’s pgedge-vectorizer with automated embedding
              pipelines, bringing semantic search and AI retrieval directly to
              the PostgreSQL layer. Reviewed and merged into the official repo.
            </p>
            <div className='text-center sm:text-start'>
              <Link
                href='https://github.com/pgEdge/pgedge-vectorizer'
                target='_blank'
                className='text-xl py-5 px-14 mt-5 font-semibold text-white rounded-full duration-300 bg-primary border border-primary hover:bg-darkmode hover:border-darkmode'>
                View repository
              </Link>
            </div>
          </div>

          {/* COLUMN-2 */}
          <div className=''>
            <div className="bg-[#D6FFEB] pt-12 px-8 sm:px-20 pb-52 md:pb-70 rounded-3xl bg-[url('/images/beliefs/bg.svg')] bg-no-repeat bg-bottom">
              <p className='text-lg font-normal text-primary tracking-widest mb-5 text-center sm:text-start uppercase'>
                RESEARCH
              </p>
              <h3 className='text-black mb-5 text-center sm:text-start'>
                <span className='text-primary'>Research-grade</span> work,
                used in frontier model training.
              </h3>
              <p className='pt-2 mb-16 text-center sm:text-start text-black/75 text-lg'>
                We designed high-difficulty RL environments targeting LLM failure
                modes, including CUDA kernel debugging and precision optimization
                on H100s. These were submitted to Anthropic and used in Claude
                model training.
              </p>
              <div className='text-center sm:text-start'>
                <Link
                  href='/#Projects'
                  className='text-xl py-5 px-14 mt-5 font-semibold text-white rounded-full bg-primary border border-primary hover:bg-darkmode hover:border-darkmode'>
                  Explore projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Beliefs
