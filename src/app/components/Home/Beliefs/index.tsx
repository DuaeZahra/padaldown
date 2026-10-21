import React from 'react'
import Link from 'next/link'

const Beliefs = () => {
  return (
    <section id='OpenSource' className='scroll-mt-20'>
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
          <div className='bg-darkmode p-8 sm:p-14 rounded-3xl flex flex-col'>
            <p className='text-base font-medium text-white/60 mb-4'>
              Open source
            </p>
            <h4 className='text-white mb-5'>pgedge-vectorizer</h4>
            <p className='text-lg text-white/75 mb-10 grow'>
              We contributed to pgEdge’s pgedge-vectorizer, which extends
              PostgreSQL’s pgvector extension with automated vectorization
              pipelines. It handles embedding generation and vector storage
              inside PostgreSQL, so semantic search runs at the database layer.
              The contribution was reviewed and merged into the official
              repository.
            </p>
            <div>
              <Link
                href='https://github.com/pgEdge/pgedge-vectorizer'
                target='_blank'
                className='inline-block text-lg py-3 px-8 font-semibold text-darkmode bg-white rounded-full hover:bg-white/85'>
                View on GitHub
              </Link>
            </div>
          </div>

          <div className='bg-grey p-8 sm:p-14 rounded-3xl flex flex-col'>
            <p className='text-base font-medium text-black/55 mb-4'>Research</p>
            <h4 className='mb-5'>RL environments for LLM training</h4>
            <p className='text-lg text-black/70 mb-10 grow'>
              We designed reinforcement learning environments that target known
              LLM failure modes, including CUDA kernel debugging and precision
              tasks (INT8, INT4, BF16, FP16) on H100 GPUs. The scenarios were
              submitted to Anthropic and used in Claude model training.
            </p>
            <div>
              <Link
                href='/#Projects'
                className='inline-block text-lg py-3 px-8 font-semibold text-white bg-darkmode rounded-full hover:bg-primary'>
                See all projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Beliefs
