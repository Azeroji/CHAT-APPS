import React from 'react'

export default function Message({user, message, date}) {

  return (
    <div className="flex gap-x-[15px] px-[40px] mb-[20px]">
        <div>
            <div className="flex items-center gap-x-[8px]">
                <p className="text-[15px] font-medium text-[#f2f3f5]">{user.username}</p>
                <p className="text-[#8c8d96] text-[10px]">{date}</p>
            </div>
            <p className=" break-all  w-[75vw] text-[15px] font-regular text-[#B5BAC1]">{message}</p>
        </div>
    </div>
  )
}
