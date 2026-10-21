import React from 'react'
import Hero from '@/app/components/Home/Hero'
import Aboutus from '@/app/components/Home/AboutUs'
import Dedicated from '@/app/components/Home/Dedicated'
import Digital from '@/app/components/Home/Digital'
import Projects from '@/app/components/Home/Projects'
import Results from '@/app/components/Home/Results'
import Beliefs from '@/app/components/Home/Beliefs'
import Work from '@/app/components/Home/Work'
import WhyUs from '@/app/components/Home/WhyUs'
import FAQ from '@/app/components/Home/FAQ'
import Contact from '@/app/components/Home/Contact'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'PedalDown Technologies | AI Engineering & Intelligent Systems',
  description:
    'PedalDown Technologies builds end-to-end AI systems across computer vision, NLP, generative AI, blockchain and full-stack product development.',
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Aboutus />
      <Dedicated />
      <Digital />
      <Projects />
      <Results />
      <Beliefs />
      <Work />
      <WhyUs />
      <FAQ />
      <Contact />
    </main>
  )
}
