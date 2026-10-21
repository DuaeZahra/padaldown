'use client'
import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className='relative overflow-hidden z-1'>
      <div className='container mx-auto pt-24 max-w-7xl px-4'>
        <div className='grid grid-cols-12 justify-center items-center'>
          <div className='col-span-12 xl:col-span-5 lg:col-span-6 md:col-span-12 sm:col-span-12'>
            <div className='py-2 px-5 bg-primary/15 rounded-full w-fit'>
              <p className='text-primary text-lg font-bold'>
                AI ENGINEERING STUDIO
              </p>
            </div>
            <h1 className='mt-4'>We build what you imagine.</h1>
            <p className='text-xl text-black/60 mt-6 max-w-xl'>
              End-to-end AI systems across computer vision, NLP, generative AI,
              blockchain and full-stack product development. Engineered,
              deployed and optimized.
            </p>
            <div className='flex flex-wrap gap-4 mt-10'>
              <Link
                href='/#Contact'
                className='bg-primary text-white text-xl font-semibold py-5 px-12 rounded-full hover:bg-darkmode duration-300'>
                Start a project
              </Link>
              <Link
                href='/#Projects'
                className='text-xl font-semibold py-5 px-12 rounded-full border-2 border-darkmode text-darkmode hover:bg-darkmode hover:text-white duration-300'>
                See our work
              </Link>
            </div>
          </div>
          <div className='xl:col-span-7 lg:col-span-6 lg:block hidden'>
            <Image
              src='/images/hero/banner-image.png'
              alt='engineer at work'
              width={600}
              height={600}
              className='w-full'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
