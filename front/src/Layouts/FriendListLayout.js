import React from 'react'
import {Outlet} from 'react-router-dom'
import FriendList from '../Components/FriendList'

export default function FriendListLayout(props){
  const [open, setOpen] = React.useState(false)

  return (
    <div className="bg-[#313338] flex-1 h-[100%] flex">
      <div className={`${ open ? "block" : "hidden" }`}>
        <FriendList user_id = {props.user_id} setKey={(key) => { props.setKey(key) }}/>
      </div>
        <Outlet/>
    </div>
  )
}
