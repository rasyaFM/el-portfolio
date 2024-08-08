import React from 'react'

export default function Banner() {
  return (
    <div className='banner'>
      <div className="grid grid-cols-3">
        <div className='left mt-14'>
          <img className='photo' src='assets/Banner-Left.png' alt='profile'/>
        </div>
        {/*  */}
        <div className='mt-6'>
          <div>
            <img className='photo w-[429px] h-[422px]' src='assets/Profile.png' alt='profile'/>
          </div>
        </div>
        {/*  */}
        <div className='right mt-14'>
          <img className='photo' src='assets/Banner-Right.png' alt='profile'/>
        </div>
      </div>
      {/*     */}
      <div>
        <img className='namban' src='assets/Name.png' alt='name'/>
        <div className='descbio rounded-3xl mt-4'>
          <div className='descbioin bg-white rounded-2xl'>
              <p className='descp text-black text-justify text-lg'>
              Passionate and experienced as a graphic designer, UI designer and frontend website developer with react js and next js.
              Able to adapt and learn something new quickly and have a leadership spirit.
              Proficient in team communication even in English. Have creative, innovative and imaginative ideas.
              Currently learning to develop websites on the back-end.
              </p>
          </div>
        </div>
      </div>
    </div>
  )
}
