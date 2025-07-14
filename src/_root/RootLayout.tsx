import React from 'react'
import {  NavLink, Outlet } from 'react-router-dom'

 

const RootLayout = () => {
  return (
    <div className='grid grid-cols-12'>
        <aside className='col-[1/3] bg-[#363740] h-screen w-[256px] fixed'>
            <p className='p-10 text-white font-bold text-[45px] leading-[100%] tracking-[0.2px]'>Admin</p>
            <div className='flex flex-col gap-8 mt-[36px] pl-3 pr-3 w-full'>
                <div className=''>
                    <NavLink to='/dashboard' className={({ isActive }) =>
                            `flex gap-3 items-center px-4 py-2 rounded ${
                                isActive ? 'bg-[#474951] text-[#F5F5F5]' : 'text-white'
                            }`}><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M21 16V4H3v12zm0-14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-7v2h2v2H8v-2h2v-2H3a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2zM5 6h9v5H5zm10 0h4v2h-4zm4 3v5h-4V9zM5 12h4v2H5zm5 0h4v2h-4z"/></svg> <p>Dashboard</p></NavLink>
                </div>
                <div className=''>
                    <NavLink to='skills' className={({ isActive }) =>
                            `flex gap-3 items-center px-4 py-2 rounded ${
                                isActive ? 'bg-[#474951] text-[#F5F5F5]' : 'text-white'
                            }`}><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M30 30h-8V4h8zm-6-2h4V6h-4zm-4 2h-8V12h8zm-6-2h4V14h-4zm-4 2H2V18h8zm-6-2h4v-8H4z"/></svg><p>Skills</p></NavLink>
                </div>
                <div className=''>
                    <NavLink to='socials' className={({ isActive }) =>
                        `flex gap-3 items-center px-4 py-2 rounded ${
                            isActive ? 'bg-[#474951] text-[#F5F5F5]' : 'text-white'
                        }`}><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 5a2 2 0 1 0 4 0a2 2 0 1 0-4 0M3 19a2 2 0 1 0 4 0a2 2 0 1 0-4 0m14 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-8-5a3 3 0 1 0 6 0a3 3 0 1 0-6 0m3-7v4m-5.3 6.8l2.8-2m7.8 2l-2.8-2"/></svg><p>Socials</p></NavLink>
                </div>
                <div className=''>
                    <NavLink to='projects' className={({ isActive }) =>
                        `flex gap-3 items-center px-4 py-2 rounded ${
                            isActive ? 'bg-[#474951] text-[#F5F5F5]' : 'text-white'
                        }`}><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 1024 1024"><path fill="currentColor" d="M312.1 591.5c3.1 3.1 8.2 3.1 11.3 0l101.8-101.8l86.1 86.2c3.1 3.1 8.2 3.1 11.3 0l226.3-226.5c3.1-3.1 3.1-8.2 0-11.3l-36.8-36.8c-3.1-3.1-8.2-3.1-11.3 0L517 485.3l-86.1-86.2c-3.1-3.1-8.2-3.1-11.3 0L275.3 543.4c-3.1 3.1-3.1 8.2 0 11.3z"/><path fill="currentColor" d="M904 160H548V96c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H120c-17.7 0-32 14.3-32 32v520c0 17.7 14.3 32 32 32h356.4v32L311.6 884.1c-3.7 2.4-4.7 7.3-2.3 11l30.3 47.2v.1c2.4 3.7 7.4 4.7 11.1 2.3L512 838.9l161.3 105.8c3.7 2.4 8.7 1.4 11.1-2.3v-.1l30.3-47.2c2.4-3.7 1.3-8.6-2.3-11L548 776.3V744h356c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32m-40 512H160V232h704z"/></svg> <p>Projects</p></NavLink>
                </div>
                </div>
        </aside>
      <div className=' col-[3/13] container mx-auto '>
      <Outlet/>
      </div>
    </div>
  )
}

export default RootLayout