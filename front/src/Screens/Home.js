import React from 'react'

const Home = (props) => {

  return (
    <div>
        { props.Key == -1 ? 
          <div className='h-[100vh] bg-[#2b2d31] flex justify-center items-center '>
            <a href="/signin"><button className='bg-[lightgray] font-medium px-[20px] p-[5px]'>SignIn</button></a>
          </div>
          :
          <div className='h-[100vh] bg-[#2b2d31] flex justify-center items-center '>
            <a href="/friends"><button className='bg-[lightgray] font-medium px-[20px] p-[5px]'>Chat</button></a>
          </div>
      }
    </div>
  )
}

export default Home 