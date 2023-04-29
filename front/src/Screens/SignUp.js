import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const SignUp = (props) => {

  const navigate = useNavigate()

  if (props.Key != -1) {
    navigate('/friends')
    window.location.reload(false);
  }

  const [msg, setMsg] = React.useState('')

  const [show, setShow] = React.useState(false)

  const [account, setAccount] = React.useState({
    username:"",
    password:"",
    confirmpassword:""
  })

  function strength(pwd) {
  const numberRegex = /\d/;
  const uppercaseRegex = /[A-Z]/;
  const lowercaseRegex = /[a-z]/;
  const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

  let c = [false,false,false,false]

  if (pwd.length >= 8) {
      for (let i = 0; i < pwd.length; i++) {
      if (numberRegex.test(pwd[i])) {
        c[0] = true;
      } else if (uppercaseRegex.test(pwd[i])) {
        c[1] = true;
      } else if (lowercaseRegex.test(pwd[i])) {
        c[2] = true;
      } else if (specialCharRegex.test(pwd[i])) {
        c[3] = true;
      }
    }
  }

  return ( c[0] + c[1] + c[2] + c[3] )

}

  const Register = async () => {
    try {
      if(account.first_name != '' && account.last_name != '' && account.email != ''){
      if (account.password === account.confirmpassword) {
        if(strength(account.password) > 1) {
          const response = await axios.post('http://localhost:5000/api/register',{
          reg: account
          })
          if (response.data.success) {
            setMsg('Successfully connected')
            console.log(response.data.id)
            props.setKey(response.data.id)
            navigate('/friends')
            window.location.reload(false);
          }
          else {
            setMsg('Account with this username exists')
          }
        }
        else {
          setMsg('Password needs to be at least 8 characters long and contain 2 of these (number, lowercase, uppercase, special char)')
        }
      }
      else {
        setMsg('Password and Confirm password do not match')
      }
    }
    } catch (error) {
      console.error(error);
    }
  };

  function handleChange(event){
      const {name,value} = event.target
      setAccount((account) => { return {
          ...account,
          [name] : value
      }
  })}

  return (
    <div className='flex justify-center'>
        
      {props.Key == -1 && <div className='mt-[7vw] lg:drop-shadow-2xl xl:h-[60vh] w-[100%] lg:w-[60vw] bg-[white] rounded-[18px] flex content-clip p-[10px]'>

        <div className='hidden xl:flex w-[30%] p-[40px] bg-primary flex-y justify-center pt-[5%] rounded-[10px] relative '>
        <div>
          <p className='text-white font-bold text-[28px] leading-[40px]'>Start your journey with us.</p>
          <p className='text-[#eeeeee] mt-[10px] font-regular text-[16px]'>Discover our set of high quality tech products</p>
        </div>
        <div className='absolute bottom-[5%] text-center'>
        <p className='text-[#eeeeee] mt-[10px] font-regular text-[16px]'>Already have an account?</p>
        <a href="/signin" className='cursor-pointer text-[#eeeeee] mt-[10px] font-regular text-[16px] hover:underline'>Sign in</a>
        </div>
        </div>
        <div className='w-[100%] xl:w-[70%] flex items-center justify-center'>

          <div className='w-[100%] xl:w-[70%]'>
          <p className='font-bold text-[28px] mb-[5%] text-center'>Sign up</p>
            <form>
<<<<<<< HEAD
            <p className='mb-[5%] text-center text-[red]'> {msg} </p>
              <p>Username</p>
              <input onChange={handleChange} placeholder="Username" className="bg-[#ededed] rounded-[4px] h-[40px] text-[14px] my-[10px] w-[100%] focus:outline-none px-[15px]" name="username" type="text" />
              <p>Password</p>
=======
              <div className='flex justify-between w-[100%]'>
                <div className='w-[45%]'>
                  <p>First Name</p>
                  <input onChange={handleChange} placeholder="First Name" className="bg-[#ededed] rounded-[4px] h-[40px] text-[14px] my-[10px] w-[100%] md:w-[100%] focus:outline-none px-[15px]" name="email" type="email" />
                </div>
                <div className='w-[45%]'>
                  <p>Last Name</p>
                  <input onChange={handleChange} placeholder="Last Name" className="bg-[#ededed] rounded-[4px] h-[40px] text-[14px] my-[10px] w-[100%] md:w-[100%] focus:outline-none px-[15px]" name="email" type="email" />
                </div>
              </div>
              <p>Username</p>
              <input onChange={handleChange} placeholder="Username" className="bg-[#ededed] rounded-[4px] h-[40px] text-[14px] my-[10px] w-[100%] focus:outline-none px-[15px]" name="email" type="email" />
              <p>Email</p>
              <input onChange={handleChange} placeholder="Email" className="bg-[#ededed] rounded-[4px] h-[40px] text-[14px] my-[10px] w-[100%] focus:outline-none px-[15px]" name="email" type="email" />


              <div className='flex justify-between w-[100%]'>
                <div className='w-[46%]'>
                <p>Password</p>
>>>>>>> ecc6e9161a89457780c101314e522ae7bc8b479d
              <div className='relative w-[100%]'>
                <input onChange={handleChange} placeholder="Password" className="bg-[#ededed] rounded-[4px] h-[40px] text-[14px] my-[10px] w-[100%] focus:outline-none px-[15px]" name="password" type={show ? "text" : "password"} />
              </div>
                </div>
                <div className='w-[46%]'>
                <p>Confirm Password</p>
              <div className='relative w-[100%]'>
<<<<<<< HEAD
                <input onChange={handleChange} placeholder="Confirm Password" className="bg-[#ededed] rounded-[4px] h-[40px] text-[14px] my-[10px] w-[100%] focus:outline-none px-[15px]" name="confirmpassword" type={show ? "text" : "password"} />
                <p className='cursor-pointer text-primary absolute top-[50%] translate-y-[-50%] right-[5%] font-medium' onClick={() => {setShow(!show)}}> {show ? "hide" : "show"} </p>
=======
                <input onChange={handleChange} placeholder="Confirm Password" className="bg-[#ededed] rounded-[4px] h-[40px] text-[14px] my-[10px] w-[100%] focus:outline-none px-[15px]" name="password" type={show ? "text" : "password"} />
                <p className='cursor-pointer text-primary absolute top-[50%] translate-y-[-50%] right-[-25%] font-medium' onClick={() => {setShow(!show)}}> {show ? "hide" : "show"} </p>
              </div>
                </div>
>>>>>>> ecc6e9161a89457780c101314e522ae7bc8b479d
              </div>
            </form>
            <button onClick={Register} className='cursor-pointer my-[10px] bg-primary h-[40px] w-[100%] rounded-[6px] text-[18px] text-[white] font-medium'>Sign up</button>
            <span className='text-primary xl:hidden'>Already have an account? <a href="/signin" className='underline'>Sign in</a></span>
          </div>

        </div>
          
      </div>}
      
      {props.Key != -1 && <div>
        <p className='text-[green] mt-[15vw] text-2xl'>Already Logged In</p>
        <p onClick={()=>{props.setKey(-1);console.log(account)}} className='cursor-pointer text-[blue] mt-[5%] text-xl text-center underline'>Disconnect</p>
      </div>}

    </div>
  )
}

export default SignUp