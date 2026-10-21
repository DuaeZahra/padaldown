'use client'
import React from 'react'
import { Icon } from '@iconify/react'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'

const faqs = [
  {
    question: 'Do you only build models, or full products?',
    answer:
      'Full products. We deliver production-ready web apps with FastAPI or Flask backends, React frontends, REST APIs and scalable infrastructure such as Redis queues and Kafka, with the model as one part of the system.',
  },
  {
    question: 'Which industries have you worked in?',
    answer:
      'Healthcare (dental and CT-scan diagnostics), fintech (stock auctions and agentic trading), education (adaptive assessment), e-commerce (virtual try-on), social media automation, smart cities and AI research.',
  },
  {
    question: 'Can you optimize models for GPU performance?',
    answer:
      'Yes. We work at the kernel level with CUDA and Triton on H100 GPUs, including INT8, INT4, BF16 and FP16 precision optimization for throughput and memory efficiency.',
  },
  {
    question: 'Do you work with generative AI and LLMs?',
    answer:
      'Yes. LLM integration via the OpenAI API, Stable Diffusion pipelines, conditional GANs, CLIP-based validation, IDM-VTON try-on and SAM segmentation, plus pgvector-backed semantic search and retrieval.',
  },
  {
    question: 'How do we get started?',
    answer:
      'Send us a short description of your project through the contact form below. We will set up a call to understand your requirements and propose a technical approach.',
  },
]

const FAQ = () => {
  return (
    <section
      id='FAQ'
      className='relative py-1 bg-cover bg-center overflow-hidden scroll-mt-20 dark:bg-darkmode'>
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='relative rounded-3xl py-16 sm:py-20 bg-grey'>
          <h2 className='text-center max-w-3xl mx-auto px-4'>
            Questions
          </h2>
          <div className='w-full px-4 pt-12'>
            {faqs.map((faq, i) => (
              <div
                key={i}
                className='mx-auto w-full max-w-5xl rounded-2xl p-6 sm:p-8 bg-white mb-5 last:mb-0'>
                <Disclosure>
                  {({ open }) => (
                    <div>
                      <DisclosureButton className='flex w-full justify-between items-center gap-4 text-left text-xl sm:text-2xl font-medium focus:outline-hidden hover:cursor-pointer'>
                        <span className='text-black'>{faq.question}</span>
                        <div
                          className={`h-5 w-5 shrink-0 transform transition-transform duration-300 ${
                            open ? 'rotate-180' : ''
                          }`}>
                          <Icon icon='tabler:chevron-up' width='20' height='20' />
                        </div>
                      </DisclosureButton>
                      <DisclosurePanel className='text-base text-black/60 font-normal text-left pt-4 mt-6 border-t border-border'>
                        <div className='lg:max-w-70%'>{faq.answer}</div>
                      </DisclosurePanel>
                    </div>
                  )}
                </Disclosure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
