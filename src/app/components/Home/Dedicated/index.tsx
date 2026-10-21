import React from 'react'
import Image from 'next/image'

const Dedicated = () => {
  return (
    <section id='About' className='scroll-mt-20'>
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 items-center'>
          <div className='lg:col-span-5'>
            <Image
              src='/images/dedicated/head-of-sales.webp'
              alt='PedalDown Head of Sales'
              width={416}
              height={520}
              className='rounded-3xl object-cover w-full max-w-md'
            />
            <p className='text-base text-black/55 mt-4'>
              Head of Sales, PedalDown Technologies
            </p>
          </div>
          <div className='lg:col-span-7'>
            <h2 className='mb-8'>About us</h2>
            <p className='text-xl text-black/70 mb-6'>
              PedalDown Technologies is an AI and software engineering firm. We
              build end-to-end systems across computer vision, natural language
              processing, generative AI, blockchain and full-stack product
              development.
            </p>
            <p className='text-xl text-black/70'>
              Our team comes from one of Pakistan’s top engineering
              institutions and has delivered production systems for clients in
              fintech, healthcare, education and social media automation. We
              take projects from prototype through to deployment and
              optimization.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Dedicated
