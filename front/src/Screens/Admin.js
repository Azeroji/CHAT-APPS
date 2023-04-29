import React from 'react'
import { Outlet } from 'react-router-dom'

const AddProduct = () => {
  const [show, setShow] = React.useState(false)

  return (
    <div className='flex h-[100%] relative'>
          { !show ? <img src="/assets/icons/menu.png" className='md:hidden absolute top-[30px] left-[10px]' width="28px" onClick={() => {setShow(true)}} /> : <img src="/assets/icons/close.png" className='md:hidden absolute top-[30px] left-[10px] z-[1000]' width="22px" onClick={() => {setShow(false)}} /> }
          <div className={`${show ? "block" : "hidden" } md:block absolute md:relative md:w-[20%] w-[50%] h-[100%] px-[20px] py-[50px] text-center bg-[#F5F5F5] rounded-[5px]`}>
            <div className='flex justify-center'>
                <img src="/assets/content/user.png" className='rounded-full w-[75px]' />
            </div>

            <p className='text-l font-semibold mt-[15px] mb-[50px]'>Admin Panel</p>

            <ul>
              <a href="/admin"><li className='cursor-pointer rounded-[3px] font-medium border-[#F5F5F5] border-l-[5px] leading-10 hover:border-primary hover:shadow hover:bg-white'>Dashboard</li></a>
              <div className='flex justify-center'><div className='border-t-[1px] w-[30%] border-[lightgray]'></div></div>
              <a href="/admin/orders"><li className='cursor-pointer rounded-[3px] font-medium border-[#F5F5F5] border-l-[5px] leading-10 hover:border-primary hover:shadow hover:bg-white'>Orders</li></a>
              <div className='flex justify-center'><div className='border-t-[1px] w-[30%] border-[lightgray]'></div></div>
              <a href="/admin/add"><li className='cursor-pointer rounded-[3px] font-medium border-[#F5F5F5] border-l-[5px] leading-10 hover:border-primary hover:shadow hover:bg-white'>Add Products</li></a>
              <div className='flex justify-center'><div className='border-t-[1px] w-[30%] border-[lightgray]'></div></div>
              <a href="/account"><li className='cursor-pointer rounded-[3px] font-medium border-[#F5F5F5] border-l-[5px] leading-10 hover:border-primary hover:shadow hover:bg-white'>Settings</li></a>
            </ul>
          </div>
        <div className='w-[100%] flex justify-center'>
          <Outlet/>
        </div>
    </div>
  )
}

export default AddProduct