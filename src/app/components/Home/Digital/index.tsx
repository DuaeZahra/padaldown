'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Digital = () => {
  return (
    <section className='relative bg-cover bg-center overflow-hidden'>
      <div className='container mx-auto max-w-7xl px-4'>
        <div className="rounded-3xl bg-primary bg-[url('/images/digital/bg.svg')] bg-no-repeat bg-right-top lg:pb-60 pb-24 relative px-6 lg:px-0">
          <div className='grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2'>
            {/* COLUMN-1 */}
            <div className='pt-24 lg:pl-24'>
              <p className='text-lg font-normal text-white mb-5 tracking-widest text-center lg:text-start uppercase mt-5'>
                Who we are
              </p>
              <h2 className='text-white mb-8 leading-tight text-center lg:text-start lg:w-full'>
                An AI firm built on research and real deployments.
              </h2>
              <p className='text-lg text-white/80 mb-10 text-center lg:text-start'>
                From CNNs that read dental X-rays to agentic trading systems and
                kernel-level GPU work, we take ideas from paper to production.
              </p>
              <div className='text-center lg:text-start'>
                <Link
                  href='/#Contact'
                  className='text-xl font-semibold text-white bg-deep-slate/80 hover:bg-deep-slate py-4 px-12 rounded-full'>
                  Talk to an engineer
                </Link>
              </div>
            </div>
          </div>
          {/* COLUMN-2 */}
          <div className='absolute -bottom-16 -right-20 xl:block hidden'>
            <Image
              src='/images/digital/girldoodle.svg'
              alt='doodle'
              width={815}
              height={691}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
export default Digital
