import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, {useState} from 'react'

const Contact = ({isDarkMode}) => {

    const [msg, setMsg] = useState('') // State to handle success message

    const scriptURL = 'https://script.google.com/macros/s/AKfycbxy2WIdyjiVA5aw3b7XWVc_SC4VQTHQUBjlOZ62yv8Fa5JWooXxFWIa1jiEvnL0ro48Ig/exec'

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form)

        fetch(scriptURL, { method: 'POST', body: formData })
        .then(response => {
            setMsg("Message sent successfully")
            setTimeout(() => setMsg(""), 5000) // Clear message after 5 seconds
            form.reset()
        })
        .catch(error => {
            console.error('Error!', error.message)
            setMsg("Failed to send message")
            setTimeout(() => setMsg(""), 5000)
        })
    }

  return (
    <div id='contact' className='w-full px-[12%] py-10 scroll-mt-20 '>
        <h4 className='text-center mb-2 text-lg font-Ovo'>Contact me</h4>
        <h2 className='text-center text-5xl font-Ovo'>Get in touch</h2>

        <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
            Feel free to contact me for any inquiries or collaborations. I am always open to new opportunities.
        </p>

        <form name="submit-to-google-sheet" className='max-w-2xl mx-auto' onSubmit={handleSubmit}>
            <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>

                <input type="text" name="Name" placeholder='Name' required 
                className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90'/>

                <input type="text" name="Email" placeholder='Email' required 
                className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90'/>

            </div>
            <textarea name="Message" rows='6' placeholder='Enter your message' required 
            className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90'></textarea>

            <button type='submit' className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500
            dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover'>
                Submit <Image src={assets.right_arrow_white} alt='' className='w-4'/>
            </button>

            {msg && <p id="msg" className='mt-4 text-center'>{msg}</p>}
        </form>
    </div>
  )
}

export default Contact
