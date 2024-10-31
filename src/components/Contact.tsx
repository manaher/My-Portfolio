import React from 'react'
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
        <div className='grid md:grid-cols-2 gap-10'>
            <div className='space-y-2'>
                <h2 className='text-4xl' data-aos="zoom-in-up">Contact me</h2>
                <p className='text-purple-400 text-small py-3' data-aos="zoom-in-up">
                    You can contact me by dropping a line or sending a message by submitting a form.
                </p>
                <div className='flex gap-3 items-center' data-aos="zoom-in-up">
                    <IoIosMail size={30} /> abc@gmail.com
                </div>
                <div className='flex gap-3 items-center' data-aos="zoom-in-up">
                    <FaPhoneAlt size={26} /> 0349-1234567
                </div>
            </div>
            <div className='space-y-8'>
                <div className='flex flex-col gap-1' data-aos="zoom-in-up">
                    <label htmlFor='name'>Name</label>
                    <input type='text'
                    className='h-[40px] bg-transparent border border-purple-400 '
                    id='name'/>
                </div>
                <div className='flex flex-col gap-1' data-aos="zoom-in-up">
                    <label htmlFor='email'>E-mail</label>
                    <input type='text'
                    className='h-[40px] bg-transparent border border-purple-400 '
                    id='email'/>
                </div>
                <div className='flex flex-col gap-1' data-aos="zoom-in-up">
                    <label htmlFor='message'>Message</label>
                    <textarea 
                    className= 'bg-transparent border border-purple-400 '
                    id='msg' rows={8}>
                        </textarea>
                </div>
                <button className='bg-purple-500 px-6' data-aos="zoom-in-up">Send</button>
            </div>
        </div>
      
    </div>
  )
}

export default Contact
