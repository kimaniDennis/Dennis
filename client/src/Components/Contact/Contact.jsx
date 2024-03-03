import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div id='contact' className=' w-100 vh-100 bg-dark d-flex flex-column justify-content-center align-items-center'>
        <div className='w-50 text-center'>
            <p className='what'><span>04.</span>What is next?</p>
        <h1 className='text-white'>Get In Touch</h1>
        <p className='detail'>Although I'm not currently for any new opportunities,
            my inbox is always open. Whether you have a question or just 
            want to say hi, I'll try my best to get back to you
        </p>
        <button className='bg-transparent'>Say Hello!</button>
        </div>
    </div>
  )
}

export default Contact