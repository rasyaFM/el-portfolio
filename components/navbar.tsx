import React from 'react'
import Link from 'next/link'


export default function Navbar() {
  return (
    <nav className='nav flex fixed top-0 justify-between items-center h-[59px] shadow-slate-600 shadow-lg'>
        <div className='ml-[47px] mt-16 bg-white w-[81px] h-[81px] rounded-full'>
          <Link type="btn" href="/login"> {/* Button On Click Dropdown List */}
            <img src="Logo EL.png" className='ml-1.5' width={65} height={65} alt='logo'/>
          </Link>
        </div>
        <div className='mr-12 mt-16 bg-white rounded-full w-[80px] h-[80px]'>
          <Link type='btn' href="/"> {/* Button On Click Download File CV PDF */}
            <img src="CC.jpg" className='ml-2 rounded-full mt-1.5' width={65} height={65} alt='cv' id='cv'/>
          </Link>
        </div>
    </nav>
  )
}


