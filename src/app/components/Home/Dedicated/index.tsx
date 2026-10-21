'use client'
import React from 'react'
import Image from 'next/image'

const Dedicated = () => {
  return (
    <section className='relative bg-cover bg-center overflow-hidden'>
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-5 items-center'>
          <Image
            src='/images/dedicated/spiral.svg'
            height={272}
            width={686}
            alt='spiral-design'
            className='absolute left-0 top-0 hidden lg:block -z-10'
          />
          {/* Left Column */}
          <div className='col-span-12 lg:col-span-6 justify-self-center'>
            <Image
              src='/images/dedicated/head-of-sales.webp'
              alt='PedalDown Head of Sales'
              width={416}
              height={520}
              className='mx-auto md:mx-0 rounded-3xl shadow-xl object-cover'
            />
          </div>

          {/* Right Column */}
          <div className='col-span-12 lg:col-span-6'>
            <div className='relative'>
              <Image
                src='/images/dedicated/comma.svg'
                alt='comma-image'
                width={200}
                height={106}
                className='absolute -top-16 -left-32 hidden lg:block'
              />
            </div>
            <h2 className='text-center -mr-1 lg:text-start lg:leading-20 leading-14'>
              “We don’t just prototype. We engineer, deploy, and optimize.”
            </h2>
            <p className='text-xl font-medium text-black/55 mt-5 text-center lg:text-start'>
              Academic rigor from one of Pakistan’s top engineering institutions,
              paired with hands-on experience shipping production systems for
              fintech, healthcare, education and social media automation.
            </p>
            <h5 className='mt-12 lg:pl-32 relative lg:before:block before:hidden before:absolute before:bg-black before:h-0.5 before:w-24 before:left-0 before:bottom-1/2 text-center lg:text-start'>
              Head of Sales, PedalDown Technologies
            </h5>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Dedicated
