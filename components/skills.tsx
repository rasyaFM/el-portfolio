import React from 'react'

export default function Skills() {
  return (
    <section>
      <div className='mt-[295px]'>
        <div>
          <img className='photo' src='assets/Skills.png' alt='skills' id='skills' />
        </div>
      </div>
      <div className='flex justify-center gap-10 mt-8'>
          <div className='skill-item flex items-center gap-3'>
            <img src='assets/Figma.png' width={46} height={70} alt='skill'/>
            <h1 className='text-white text-3xl font-semibold' id='nama-skill'>Figma</h1>
          </div>
          <div className=' skill-item flex items-center gap-1'>
            <img src='assets/Illustrator.png' width={85} height={85} alt='skill'/>
            <h1 className='text-white text-3xl font-semibold' id='nama-skill'>Illustrator</h1>
          </div>
          <div className='skill-item flex items-center gap-3'>
            <img src='assets/React.png' width={73} height={73} alt='skill'/>
            <h1 className='text-white text-3xl font-semibold' id='nama-skill'>React.js</h1>
          </div>
          <div className='skill-item flex items-center gap-3'>
            <img src='assets/Photoshop.png' width={85} height={85} alt='skill'/>
            <h1 className='text-white text-3xl font-semibold' id='nama-skill'>Photoshop</h1>
          </div>
      </div>
    </section>
  )
}