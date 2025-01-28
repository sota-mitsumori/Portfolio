import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-20'>
        <div className='text-center'>
           
            <div className='w-max flex items-center gap-2 mx-auto'>
                <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6'/>
                sota.mitsumori@gmail.com
            </div>
        </div>
    <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>© 2025, Sota Mitsumori. Made with GreatStack</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
            <li><a href="https://www.github.com/sota-mitsumori" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://www.instagram.com/sota.m04/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://www.linkedin.com/in/sota-mitsumori/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://www.x.com/sotamitsumori" target="_blank" rel="noopener noreferrer">X</a></li>
        </ul>
    </div>
    </div>
    
    
  )
}

export default Footer
