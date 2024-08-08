import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className='footer flex justify-between'>
      <div className='ml-3'>
        <h1 className='left-footer text-4xl'>Social Media</h1>
        <div className='link flex gap-4'>
          <Link href='#'>
            <img src='../assets/email.png' width={40} height={40} alt='email'></img>
          </Link>
          <Link href='#'>
            <img src='../assets/github.png' width={40} height={40} alt='github'></img>
          </Link>
          <Link href='#'>
            <img src='../assets/instagram.png' width={40} height={40} alt='instagram'></img>
          </Link>
          <Link href='#'>
            <img src='../assets/linkedin.png' width={40} height={40} alt='linkedin'></img>
          </Link>
          <Link href='#'>
            <img src='../assets/vercel.png' width={40} height={40} alt='vercel'></img>
          </Link>
        </div>
        <h1 className='text-xl' id='bottom'>All My Portfolio’s Sources</h1>
      </div>
      <div className='justify-items-center'>
        <h1 className='text-5xl items-center' id='top'>elrasya.design</h1>
        <div className='bg-white w-[325px] h-[4px]' id='garis' ></div>
        <h1 className='text-lg items-center' id='status'>Graphic Designer | Website Developer</h1>
        <h1 className='mid-footer text-lg items-center'>Copyright &copy; 2024 | @elrasya.design
        </h1>
      </div>
      <div className='mr-3'>
        <h1 className='right-footer text-4xl'>Propose as Client</h1>
        <div></div>
      </div>
    </footer>
  )
}