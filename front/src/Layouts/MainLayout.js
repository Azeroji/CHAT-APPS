import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Layout(){


  return (
    <div className='flex flex-col h-[100vh]'>
        <div className='flex-1'>
          <Outlet/>
        </div>
    </div>
  )
}
