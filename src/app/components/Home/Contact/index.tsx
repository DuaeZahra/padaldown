'use client'
import React, { useState } from 'react'

const CONTACT_EMAIL = 'pedaldowntechnologies@gmail.com'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Project enquiry from ${name}`)
    const body = encodeURIComponent(`${message}\n\n${name}\n${email}`)
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
  }

  return (
    <section id='Contact' className='overflow-hidden bg-joinus scroll-mt-20'>
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='text-center'>
          <p className='text-primary text-lg font-normal tracking-widest uppercase'>
            Contact us
          </p>
          <h2 className='my-6'>Let’s build your next AI system.</h2>
          <p className='text-black/50 text-lg font-normal max-w-3xl mx-auto'>
            We are ready to partner with you on your next AI challenge. Tell us
            about your project requirements and we’ll get back to you.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className='mx-auto max-w-3xl mt-12 bg-grey rounded-3xl p-6 sm:p-10 grid grid-cols-1 sm:grid-cols-2 gap-5'>
          <input
            type='text'
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='py-4 px-6 text-lg text-black rounded-full bg-white focus:outline-primary'
            placeholder='Your name'
          />
          <input
            type='email'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='py-4 px-6 text-lg text-black rounded-full bg-white focus:outline-primary'
            placeholder='Your email'
          />
          <textarea
            required
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className='sm:col-span-2 py-4 px-6 text-lg text-black rounded-3xl bg-white focus:outline-primary resize-none'
            placeholder='Tell us about your project'
          />
          <button
            type='submit'
            className='sm:col-span-2 text-xl text-white font-semibold rounded-full bg-primary py-5 px-12 hover:bg-darkmode duration-300 hover:cursor-pointer'>
            Send message
          </button>
        </form>
        <p className='text-center text-lg text-black/60 mt-8'>
          Or email us directly at{' '}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className='font-semibold text-primary hover:underline break-all'>
            {CONTACT_EMAIL}
          </a>
        </p>
      </div>
    </section>
  )
}
export default Contact
