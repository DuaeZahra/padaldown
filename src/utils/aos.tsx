'use client'
import { useEffect } from "react";
import AOS from "aos"
import 'aos/dist/aos.css';
import { addCollection } from '@iconify/react'
import { tablerIcons } from './icons'

addCollection(tablerIcons)

const Aoscompo = ({children}:any) => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
        })
    }, [])
  return (
    <div>
      {children}
    </div>
  )
}

export default Aoscompo
