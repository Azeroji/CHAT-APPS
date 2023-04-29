import React from 'react'
import Friend from './Friend'
import './main.css'
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom'

export default function FriendList(props){

  const navigate = useNavigate()
  if (props.user_id == -1) {
    navigate('/signin')
    window.location.reload(false);
  }
    const id = useParams()

    const [selected, setSelected] = React.useState(id)
    const [user,setUser] = React.useState([])
    
    React.useEffect( () => {
        const getmsg = async () => { 
        try {
          const response = await axios.post('http://localhost:5000/api/users',{
            id:props.user_id
          })
          if (response.data.success) { 
            setUser(response.data.result)
          }
          else {
          }
    
        } catch (error) {
          console.error(error);
        }
      }
      getmsg()
    },[])
    
    const userList = user.map(user => {return(<Friend key={user.id} userFriend={user} />)})

    return(
        <div>
            <div>
                <div className="bg-[#2b2d31] w-[260px] gap-y-[10px] h-[94vh] overflow-y-auto test">
                    <div className="FriendList">

                        <p className="mt-[20px] mb-[20px] text-[#8c8d96] text-[13px] font-medium text-center">MESSAGES PRIVES</p>
                        
                        {userList}

                    </div>
                </div>
                <div onClick={()=>{props.setKey(-1);window.location.reload(false)}} className="cursor-pointer px-[5px] bg-[#232428] flex items-center justify-center h-[6vh]">
                  <p className="text-white text-[16px] indent-center font-medium leading-none">Disconnect</p>
                </div> 
            </div> 
        </div>
    )
}