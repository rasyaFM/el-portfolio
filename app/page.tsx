import Banner from '@/components/banner'
import Portfolio from '@/components/portfolio'
import Skills from '@/components/skills'
import React from 'react'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'

export default function Home() {
  return (
    <div className='body'>
        <Navbar/>
        <Banner/>
        <Skills/>
        <Portfolio/>
        <Footer/>
    </div>
  );
}
