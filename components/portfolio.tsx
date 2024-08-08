import React from 'react'

export default function Portfolio() {
  return (
    <div>
      <div className='mt-[180px]'>
        <div>
          <img className='photo w-[470px] h-[125px]' src='assets/Portfolio.png' alt='Portfolio'/>
        </div>
      </div>
      <div className='mt-12 flex justify-center'>
        <div className='bg-white p-2 w-[250px] h-[45px] filter rounded-lg'>
          <h1 className='text-xl text-center'>Filter</h1>
        </div>
      </div>
      <div className='mt-2'>
        <div className='flex cards '> {/* Ganti Text-Center jadi Items-center */}        
          <div className='bg-yellow-300 card-items rounded-2xl shadow-md shadow-black'>
            <img className='m-auto' src='portfolio/RG.png' width={300} height={300} alt='Portfolio' id='imp-1'/>
          </div>
          <div className='bg-yellow-300 card-items rounded-2xl shadow-md shadow-black'>
            <img className='m-auto' src='portfolio/RG.png' width={300} height={300} alt='Portfolio' id='imp-1'/>
          </div>
          <div className='bg-yellow-300 card-items rounded-2xl shadow-md shadow-black'>
            <img className='m-auto' src='portfolio/RG.png' width={300} height={300} alt='Portfolio' id='imp-1'/>
          </div>
          <div className='bg-yellow-300 card-items rounded-2xl shadow-md shadow-black'>
            <img className='m-auto' src='portfolio/RG.png' width={300} height={300} alt='Portfolio' id='imp-1'/>
          </div>
          <div className='bg-yellow-300 card-items rounded-2xl shadow-md shadow-black'>
            <img className='m-auto' src='portfolio/RG.png' width={300} height={300} alt='Portfolio' id='imp-1'/>
          </div>
          <div className='bg-yellow-300 card-items rounded-2xl shadow-md shadow-black'>
            <img className='m-auto' src='portfolio/RG.png' width={300} height={300} alt='Portfolio' id='imp-1'/>
          </div>
        </div>
      </div>
    </div>
  )
}