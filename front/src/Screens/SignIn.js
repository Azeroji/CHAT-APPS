import React from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const SignIn = (props) => {
  const navigate = useNavigate();

  const [show, setShow] = React.useState(false)
  const [msg, setMsg] = React.useState('')

  const [account, setAccount] = React.useState({
    id:"",
    password:""
  })

  function handleChange(event){
      const {name,value} = event.target
      setAccount((account) => { return {
          ...account,
          [name] : value
      }
  })}

  const logIn = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/login',{
        log: account
      })
      if (response.data.success) {
        props.setKey(response.data.id)
        navigate('/friends')
        window.location.reload(false);
      }
      else {
        setMsg('Wrong username/email or password')
      }

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      { props.Key == -1 ? <div className='flex justify-center'>
        
<<<<<<< HEAD
        <div className='mt-[7vw] lg:drop-shadow-2xl xl:h-[60vh] w-[100%] lg:w-[60vw] bg-[white] rounded-[18px] flex content-clip p-[10px]'>
   
           <div className='hidden xl:flex w-[30%] p-[40px] bg-primary flex-y justify-center pt-[5%] rounded-[10px] relative '>
           <div>
             <p className='text-white font-bold text-[32px] leading-[40px]'>Start your journey with us.</p>
             <p className='text-[#eeeeee] mt-[10px] font-regular text-[16px]'>Discover our set of high quality tech products</p>
           </div>
           <div className='absolute bottom-[5%] text-center'>
           <p className='text-[#eeeeee] mt-[10px] font-regular text-[16px]'>Don't have an account?</p>
           <a href="/signup" className='cursor-pointer text-[#eeeeee] mt-[10px] font-regular text-[16px] hover:underline'>Create one</a>
           </div>
           </div>
           <div className='px-[5%] w-[100%] xl:w-[70%] flex items-center justify-center'>
   
             <div className='w-[100%] xl:w-[60%]'>
             <p className='font-bold text-[32px] mb-[5%] text-center'>Sign in</p>
               <form>
                 <p className='mb-[5%] text-[red] text-center'> {msg} </p>
                 <p>Username/Email</p>
                 <input onChange={handleChange} placeholder="Username or Email" className="bg-[#ededed] rounded-[4px] h-[40px] text-[14px] my-[10px] w-[100%] focus:outline-none px-[15px]" name="id" type="id" />
                 <p>Password</p>
                 <div className='relative w-[100%]'>
                   <input onChange={handleChange} placeholder="Password" className="bg-[#ededed] rounded-[4px] h-[40px] text-[14px] my-[10px] w-[100%] focus:outline-none px-[15px]" name="password" type={show ? "text" : "password"} />
                   <p className='cursor-pointer text-primary absolute top-[50%] translate-y-[-50%] right-[5%] font-medium' onClick={() => {setShow(!show)}}> {show ? "hide" : "show"} </p>
                 </div>
               </form>
               <button onClick={logIn} className='cursor-pointer my-[10px] bg-primary h-[40px] w-[100%] rounded-[6px] text-[18px] text-[white] font-medium'>Sign in</button>
               <span className='text-primary xl:hidden'>Don't have an account? <a href="/signup" className='underline'>Create one </a></span>
             </div>
   
           </div>
   
           
             
         </div>
   
       </div>
        :
        <div className='h-[100vh] bg-[#2b2d31] flex justify-center items-center '>
          <a href="/friends"><button className='bg-[lightgray] font-medium px-[20px] p-[5px]'>Chat</button></a>
        </div>
    }
=======
      <div className='mt-[5vw] lg:drop-shadow-2xl xl:h-[60vh] w-[100%] lg:w-[60vw] bg-[white] rounded-[18px] flex content-clip p-[10px]'>

        <div className='hidden xl:flex w-[30%] p-[40px] bg-primary flex-y justify-center pt-[5%] rounded-[10px] relative '>
        <div>
          <p className='text-white font-bold text-[28px] leading-[40px]'>Start your journey with us.</p>
          <p className='text-[#eeeeee] mt-[10px] font-regular text-[16px]'>Discover our set of high quality tech products</p>
        </div>
        <div className='absolute bottom-[5%] text-center'>
        <p className='text-[#eeeeee] mt-[10px] font-regular text-[16px]'>Don't have an account?</p>
        <a href="/signup" className='cursor-pointer text-[#eeeeee] mt-[10px] font-regular text-[16px] hover:underline'>Create one</a>
        </div>
        </div>
        <div className='px-[5%] w-[100%] xl:w-[70%] flex items-center justify-center'>

          <div className='w-[100%] xl:w-[60%]'>
          <p className='font-bold text-[28px] mb-[5%] text-center'>Sign in</p>
            <form>
              <p>Username/Email</p>
              <input onChange={handleChange} placeholder="Username or Email" className="bg-[#ededed] rounded-[4px] h-[40px] text-[14px] my-[10px] w-[100%] focus:outline-none px-[15px]" name="email" type="email" />
              <p>Password</p>
              <div className='relative w-[100%]'>
                <input onChange={handleChange} placeholder="Password" className="bg-[#ededed] rounded-[4px] h-[40px] text-[14px] my-[10px] w-[100%] focus:outline-none px-[15px]" name="password" type={show ? "text" : "password"} />
                <p className='cursor-pointer text-primary absolute top-[50%] translate-y-[-50%] right-[5%] font-medium' onClick={() => {setShow(!show)}}> {show ? "hide" : "show"} </p>
              </div>
              <p className='cursor-pointer text-primary font-medium mb-[10px]'> Forgot password? </p>
              <input className='cursor-pointer my-[10px] bg-primary h-[40px] w-[100%] rounded-[6px] text-[18px] text-[white] font-medium' type="submit" value="Sign In" />
            </form>
            <div className='flex justify-between w-[100%] items-center text-[gray]'>
              <hr width="45%"/>
              <p>or</p>
              <hr width="45%"/>
            </div>
            <button className='my-[10px] flex items-center gap-x-[10px] bg-white border-[gray] border h-[40px] w-[100%] justify-center rounded-[6px]'>
              <img src="./assets/content/google-logo.png" width="22px" />
              <p className='text-[18px] text-[black] font-medium'>Sign in with google</p>
            </button>
          </div>

        </div>
          
      </div>

>>>>>>> ecc6e9161a89457780c101314e522ae7bc8b479d
    </div>
  )
}

export default SignIn