import Link from 'next/link'

const work = [
  { name: 'FairStock', note: 'Fintech platform, live', href: 'https://fairstock.trade' },
  { name: 'Remembrly', note: 'Adaptive assessment, live', href: 'https://remembrly.ai/' },
  { name: 'pgedge-vectorizer', note: 'Open-source contribution, merged', href: 'https://github.com/pgEdge/pgedge-vectorizer' },
  { name: 'DentalAI', note: 'X-ray diagnostics for AKU', href: '/#Projects' },
]

const Hero = () => {
  return (
    <section className='relative overflow-hidden z-1'>
      <div className='container mx-auto pt-32 max-w-7xl px-4'>
        <div className='grid grid-cols-12 gap-y-14 lg:gap-x-16 items-end'>
          <div className='col-span-12 lg:col-span-7'>
            <p className='text-black/60 text-lg font-medium mb-6'>
              PedalDown Technologies
            </p>
            <h1>We build what you imagine.</h1>
            <p className='text-xl text-black/60 mt-8 max-w-2xl'>
              We are an AI and software engineering firm. We build machine
              learning systems and the products around them: computer vision,
              NLP, generative AI, blockchain and full-stack web apps.
            </p>
            <div className='flex flex-wrap gap-4 mt-10'>
              <Link
                href='/#Contact'
                className='bg-darkmode text-white text-lg font-semibold py-4 px-10 rounded-full hover:bg-primary duration-300'>
                Get in touch
              </Link>
              <Link
                href='/#Projects'
                className='text-lg font-semibold py-4 px-10 rounded-full border border-black/20 text-black hover:border-black duration-300'>
                View projects
              </Link>
            </div>
          </div>
          <div className='col-span-12 lg:col-span-5'>
            <p className='text-sm font-semibold text-black/50 mb-3'>
              Recent work
            </p>
            <ul className='border-t border-black/10'>
              {work.map((item) => (
                <li key={item.name} className='border-b border-black/10'>
                  <Link
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    className='flex items-baseline justify-between gap-4 py-4 group'>
                    <span className='text-lg font-semibold text-black group-hover:text-primary'>
                      {item.name}
                    </span>
                    <span className='text-base text-black/55 text-right'>
                      {item.note}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
