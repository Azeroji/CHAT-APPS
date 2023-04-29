import React from 'react'
import '../index.css'

const Navbar = (props) => {
    const [open, setOpen] = React.useState(false)
    const [hover, setHover] = React.useState(false)

  return (
    <nav className='shadow-lg relative'>

        <div className='justify-between px-[20px] xl:px-[80px] hidden xl:flex items-center'>

            <div className='flex items-center gap-x-[20px]'>
                <a href="/"><img src="/assets/content/BrandLogo.png" width="100px" /></a>
                <div class="relative items-center">
                        <input placeholder="Search something..." className="bg-[#ededed] rounded-[4px] h-[30px] text-[14px] focus:outline-none indent-[13px] px-[15px]" name="text" type="text" />
                        <img src="/assets/icons/loupe.png" width="12px" className='absolute top-1/2 translate-y-[-50%] left-[8px] ' />
                </div>
            </div>

            <div className='flex gap-x-[30px] items-center absolute left-1/2 translate-x-[-50%]'>
                <p onMouseOver={() => {setHover(true)}} onMouseOut={() => {setHover(false)}} className='cursor-pointer py-[35px] text-[18px] decoration-[2px] hover:underline-offset-[5px] hover:underline font-medium'>Categories</p>
                <p className='cursor-pointer text-[17px] decoration-[2px] hover:underline-offset-[5px] hover:underline font-medium'>Support</p>
                <p className='cursor-pointer text-[17px] decoration-[2px] hover:underline-offset-[5px] hover:underline font-medium'>Community</p>
            </div>

            <div className='flex items-center gap-x-[20px]'>
<<<<<<< HEAD
                <a href={props.Key == -1 ? "/signin" : "/account"}><img src="/assets/icons/user.png" width="19px" /></a>
                <a><img src="/assets/icons/like.png" width="19px" /></a>
=======
                <a href="/signin"><img src="./assets/icons/user.png" width="19px" /></a>
                <a href="#"><img src="./assets/icons/like.png" width="19px" /></a>
>>>>>>> ecc6e9161a89457780c101314e522ae7bc8b479d
                <button className='flex items-center gap-x-[10px] bg-primary h-[43px] w-[152px] justify-center rounded-[6px]'>
                    <img src="/assets/icons/cart.png" width="22px" />
                    <p className='text-[18px] text-[white] font-medium'>Basket</p>
                </button>
            </div>

        </div>

        { hover && 
                <div onMouseOver={() => {setHover(true)}} onMouseOut={() => {setHover(false)}} className='border-t-[2px] border-primary shadow-lg bg-white w-[50vw] px-[50px] absolute left-1/2 translate-x-[-50%] z-[1000] flex'>
                    
                    <div className='w-[33.33%]'>
                        <p className='mt-[25px] mb-[20px] text-[16px] decoration-[2px]  font-medium'>PC</p>
                        <p className='cursor-pointer mt-[25px] mb-[20px] text-[15px] text-[#808080] decoration-[2px] hover:text-primary font-regular'>Laptops</p>
                        <p className='cursor-pointer mt-[25px] mb-[20px] text-[15px] text-[#808080] decoration-[2px] hover:text-primary font-regular'>Desktops & Components</p>
                        <p className='cursor-pointer mt-[25px] mb-[20px] text-[15px] text-[#808080] decoration-[2px] hover:text-primary font-regular'>Monitors</p>
                        <p className='cursor-pointer mt-[25px] mb-[20px] text-[15px] text-[#808080] decoration-[2px] hover:text-primary font-regular'>Mice</p>
                        <p className='cursor-pointer mt-[25px] mb-[20px] text-[15px] text-[#808080] decoration-[2px] hover:text-primary font-regular'>Mats</p>
                        <p className='cursor-pointer mt-[25px] mb-[20px] text-[15px] text-[#808080] decoration-[2px] hover:text-primary font-regular'>Keyboards</p>
                        <p className='cursor-pointer mt-[25px] mb-[20px] text-[15px] text-[#808080] decoration-[2px] hover:text-primary font-regular'>Headsets</p>
                    </div>
                    <div className='w-[33.33%]'>
                        <p className='mt-[25px] mb-[20px] text-[16px] decoration-[2px]  font-medium'>Consoles</p>
                        <p className='cursor-pointer mt-[25px] mb-[20px] text-[15px] text-[#808080] decoration-[2px] hover:text-primary font-regular'>Xbox</p>
                        <p className='cursor-pointer mt-[25px] mb-[20px] text-[15px] text-[#808080] decoration-[2px] hover:text-primary font-regular'>PlayStation</p>
                        <p className='cursor-pointer mt-[25px] mb-[20px] text-[15px] text-[#808080] decoration-[2px] hover:text-primary font-regular'>Meta Quest</p>
                        <p className='cursor-pointer mt-[25px] mb-[20px] text-[15px] text-[#808080] decoration-[2px] hover:text-primary font-regular'>Accessories</p>
                    </div>
                    <div className='w-[33.33%]'>
                        <p className='mt-[25px] mb-[20px] text-[16px] decoration-[2px]  font-medium'>Mobile</p>
                        <p className='cursor-pointer mt-[25px] mb-[20px] text-[15px] text-[#808080] decoration-[2px] hover:text-primary font-regular'>Handhelds</p>
                        <p className='cursor-pointer mt-[25px] mb-[20px] text-[15px] text-[#808080] decoration-[2px] hover:text-primary font-regular'>Controllers</p>
                        <p className='cursor-pointer mt-[25px] mb-[20px] text-[15px] text-[#808080] decoration-[2px] hover:text-primary font-regular'>Headphones</p>
                        <p className='cursor-pointer mt-[25px] mb-[20px] text-[15px] text-[#808080] decoration-[2px] hover:text-primary font-regular'>Earbuds</p>
                        <p className='cursor-pointer mt-[25px] mb-[20px] text-[15px] text-[#808080] decoration-[2px] hover:text-primary font-regular'>Cases</p>
                        <p className='cursor-pointer mt-[25px] mb-[20px] text-[15px] text-[#808080] decoration-[2px] hover:text-primary font-regular'>Accessories</p>
                    </div>

                </div> 
            }

        <div className='flex items-center justify-between xl:hidden px-[30px]'>

            <img src="/assets/content/BrandLogo.png" width="100px" />
            { !open ? <img src="/assets/icons/menu.png" width="28px" onClick={() => {setOpen(true)}} /> : <img src="/assets/icons/close.png" width="22px" onClick={() => {setOpen(false)}} /> }

        </div>

        
        { open && 
                <div className='shadow-xl bg-white w-[100vw] flex justify-center xl:hidden absolute left-1/2 translate-x-[-50%] z-[1000]'>
                    <div className='text-center'>
                        <input className='mb-[30px] bg-[#ededed] rounded-[4px] w-[50vw] h-[40px] text-[18px] focus:outline-none text-center' placeholder='Search...'/>
                        <p className='mb-[25px] text-[18px] decoration-[2px] hover:underline-offset-[5px] hover:underline font-medium'>Categories</p>
                        <p className='mb-[25px] text-[18px] decoration-[2px] hover:underline-offset-[5px] hover:underline font-medium'>Support</p>
                        <p className='mb-[35px] text-[18px] decoration-[2px] hover:underline-offset-[5px] hover:underline font-medium'>Community</p>
                        <p className='mb-[35px] text-[18px] decoration-[2px] hover:underline-offset-[5px] hover:underline font-medium'>Account</p>
                        <p className='mb-[35px] text-[18px] decoration-[2px] hover:underline-offset-[5px] hover:underline font-medium'>Favourites</p>
                        <div className="flex justify-center">
                            <button className='mb-[35px] flex items-center gap-x-[10px] bg-primary h-[43px] w-[152px] justify-center rounded-[6px]'>
                                <img src="/assets/icons/cart.png" width="22px" />
                                <p className='text-[18px] text-[white] font-medium'>Basket</p>
                            </button>
                        </div>
                    </div>
                </div> 
            }

    </nav>
  )
}

export default Navbar