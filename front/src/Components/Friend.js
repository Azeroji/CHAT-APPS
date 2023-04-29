import React from 'react'

const Friend = ({userFriend}) => {
    const [isHovered, setIsHovered] = React.useState(false)
    const [display, setDisplay] = React.useState(true)

    return(
        <div>
            {display && <div className="mx-[20px] mb-[5px]">
                <button  onClick={()=>{window.location.href=`/friends/${userFriend.id}`}} onMouseOver={()=>{setIsHovered(true)}} onMouseOut={()=>{setIsHovered(false)}} className={`p-[10px] px-[20px] pr-[10px] bg-[#2b2d31] text-[#8c8d96] w-full flex items-center justify-between hover:bg-[#3f4248] text-[15px] font-medium rounded-[5px]`}>
                    <div className="flex items-center gap-x-[8px]">
                        <p className="">{userFriend.username}</p>
                    </div>
                    {isHovered && <img onClick={()=>{setDisplay(false)}} src='/assets/icons/close1.png' width="11px"/>}
                </button>
            </div>}
        </div>
    )
}

export default Friend;