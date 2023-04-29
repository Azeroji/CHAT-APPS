import React from 'react'
import { useRef } from 'react';
import { useParams } from "react-router-dom";
import Message from './Message';
import axios from 'axios';
import io from 'socket.io-client';
import './main.css'

export default function FriendChat (props) {
    const [messages, setMessages] = React.useState([]);
    const [updater, setUpdater] = React.useState(0)
    const [msg, setMsg] = React.useState({});
    const [id, setId] = React.useState(-1)

    const friend = useParams();
    
    React.useEffect(() => {
        const socket = io('http://localhost:5000');
    
        socket.on('msgUpdate', (data) => {
          setUpdater(updater + 1)
        });
    
        return () => {
          socket.disconnect();
        };
      }, [messages]);

    const [user,setUser] = React.useState([])

    React.useEffect(()=>{
        const getusers = async () => { 
            try {
              const response = await axios.post('http://localhost:5000/api/users',{
                id:-1
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
          getusers();
    },[])


    React.useEffect(()=>{
        for(let i = 0;i<user.length;i++){
            let temp = String(user[i].id);
            if(temp === friend.id ){
                setId(i)
                break;
            }
        }
    },[user])
    


    function handleChange(event){
        const {value} = event.target
        setMsg({
            content : value,
        })
    }

    const handleSubmit = async(event) => {
        event.preventDefault();
    
        try {
            const response = await axios.post('http://localhost:5000/api/sendmsg',{
              msg: {
                  sender_id:props.user_id,
                  receiver_id:user[id].id,
                  content:msg.content
              }
            })

            
          const socket = io('http://localhost:5000');
          socket.emit('message',{});
      
          } catch (error) {
            console.error(error);
          }

        setMsg({
            content : "",
        })
      };

      
    React.useEffect( () => {
      const getmsg = async () => { 
        try {
            const response = await axios.post('http://localhost:5000/api/getmsg',{
            id: {
                id1:props.user_id,
                id2:user[id].id
            }
          })
          if (response.data.success) { 
            setMessages(response.data.result)
          }
          else {
          }
    
        } catch (error) {
          console.error(error);
        }
      }
      getmsg()
    },[id, updater])

    function username (id) {
        for(let i = 0; i<user.length; i++){
            if(id == user[i].id){
                return (user[i])
            }
        }
    }

    const bottomRef = useRef(null);

    React.useEffect(() => {
        bottomRef.current?.scrollIntoView({behavior: 'smooth'});
      }, [messages]);

    const MessageList = messages.map(message => {return(<Message key={message.id} user={username(message.sender_id)} message={message.content} date={message.created_at} />)})

    return (
        <div className="flex-1">
            {   (id >= 0) &&
                <div>
                    <div className="h-[93vh] flex flex-col justify-between">
                        <div className=''>
                            <div className="flex justify-between p-[10px] px-[20px]">
                                <div className="flex items-center gap-x-[5px] ">
                                    <img src="/assets/icons/arobase.png" width="28px" />
                                    <p className="text-[15px] font-medium text-[#f2f3f5]">{user[id].username}</p>
                                </div>
                            </div>

                            <hr className="border-[#1e1f22] border-[0.5px]" />

                        </div>
                        <div className='overflow-y-auto test'>
                            <div className="p-[20px]">
                                <p className="text-[27px] font-semibold text-[#f2f3f5]">{user[id].username}</p>
                                <p className="text-[#B5BAC1] text-[14px] py-[10px] pb-[30px]">Ceci est le début de l'historique de tes messages privés avec <span className="font-semibold">{user[id].username}</span></p>
                                <hr className="border-[#8c8d96] "/>
                            </div>
                            <div className=''>
                                {MessageList}
                            </div>
                            <div  ref={bottomRef}/>
                        </div>




                    </div>

                    <div className="px-[20px] relative">
                        <form onSubmit={handleSubmit}>
                            <input className="w-[100%] h-[45px] rounded-md bg-[#383a40] text-[15px] text-[#B5BAC1] focus:outline-none font-regular indent-[25px]" value={msg.content} onChange={handleChange} type="text" placeholder={`Envoyer un message à @${user[id].username}`}/>
                        </form>
                    </div>


                </div>
            }
        </div>
    )
}
