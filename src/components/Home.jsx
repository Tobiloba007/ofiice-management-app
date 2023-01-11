import React from 'react'
import demo from '../Assets/Login-img.jpg'

const Home = () => {
  return (
    <div>
                   {/* H E A D E R  */}
      <div className='flex items-center justify-between bg-[#142D62] h-24 px-2'>
        <img src="" alt="" />
        <p className='text-white text-2xl font-semibold tracking-wide'>BLUEPRINTS PATHWAY</p>
        {/* <div>
            <img src="" alt="" />
            <p className='text-white'>Branch manager</p>
        </div> */}
      </div>

                     {/*P A G E   C O N T E N T */}
      <div className='flex flex-col justify-center'>
                {/* L E F T  C O N T E N T */}
        <div className='flex flex-col justify-center items-center mt-14'>
            {/* <img src="" alt="" /> */}
            <p className='text-2xl text-[#142D62] font-semibold'>Welcome to Blueprints Pathway</p>
            <p className='text-lg py-3'>I'ts monday today 1/11/2023</p>
            <p className='text-base bg-[#417cfc] rounded-xl py-0.5 px-2 my-2'>11:11am</p>
        </div>
                   {/* R I G H T  C O N T E N T */}
        <div className='flex flex-col justify-start mt-7 h-[32rem] bg-[#f8dc5e] rounded-[2rem]'>
                     {/* R I G H T  T O P */}
            <div className='flex flex-col overflow-y-auto overflow-x-hidden pt-4'>
                <div className='flex border-2 border-[#5f90f9] rounded-2xl items-center justify-between my-2 px-2 py-2 mx-2.5 bg-[#142D62]'>
                    <img className='w-24 h-24 rounded-full border-[3.5px] border-[#5f90f9]' src={demo} alt="" />
                    <p className='text-center text-white text-lg'>Ciroma Chukwuma Adekunle</p>
                    <div className='flex flex-col items-center justify-center'>
                        <p className='text-white text-sm py-1'>Early</p>
                        <p className='text-center text-white text-sm bg-green-700 rounded-md px-1 py-[1px]'>08:10am</p>
                    </div>
                </div>
                <div className='flex border-2 border-[#5f90f9] rounded-2xl items-center justify-between my-2 px-2 py-2 mx-2.5 bg-[#142D62]'>
                    <img className='w-24 h-24 rounded-full border-[3.5px] border-[#5f90f9]' src={demo} alt="" />
                    <p className='text-center text-white text-lg'>Ciroma Chukwuma Adekunle</p>
                    <div className='flex flex-col items-center justify-center'>
                        <p className='text-white text-sm py-1'>Early</p>
                        <p className='text-center text-white text-sm bg-green-700 rounded-md px-1 py-[1px]'>08:10am</p>
                    </div>
                </div>
                <div className='flex border-2 border-[#5f90f9] rounded-2xl items-center justify-between my-2 px-2 py-2 mx-2.5 bg-[#142D62]'>
                    <img className='w-24 h-24 rounded-full border-[3.5px] border-[#5f90f9]' src={demo} alt="" />
                    <p className='text-center text-white text-lg'>Ciroma Chukwuma Adekunle</p>
                    <div className='flex flex-col items-center justify-center'>
                        <p className='text-white text-sm py-1'>Early</p>
                        <p className='text-center text-white text-sm bg-green-700 rounded-md px-1 py-[1px]'>08:10am</p>
                    </div>
                </div>
                <div className='flex border-2 border-[#5f90f9] rounded-2xl items-center justify-between my-2 px-2 py-2 mx-2.5 bg-[#142D62]'>
                    <img className='w-24 h-24 rounded-full border-[3.5px] border-[#5f90f9]' src={demo} alt="" />
                    <p className='text-center text-white text-lg'>Ciroma Chukwuma Adekunle</p>
                    <div className='flex flex-col items-center justify-center'>
                        <p className='text-white text-sm py-1'>Early</p>
                        <p className='text-center text-white text-sm bg-green-700 rounded-md px-1 py-[1px]'>08:10am</p>
                    </div>
                </div>
                <div className='flex border-2 border-[#5f90f9] rounded-2xl items-center justify-between my-2 px-2 py-2 mx-2.5 bg-[#142D62]'>
                    <img className='w-24 h-24 rounded-full border-[3.5px] border-[#5f90f9]' src={demo} alt="" />
                    <p className='text-center text-white text-lg'>Ciroma Chukwuma Adekunle</p>
                    <div className='flex flex-col items-center justify-center'>
                        <p className='text-white text-sm py-1'>Early</p>
                        <p className='text-center text-white text-sm bg-green-700 rounded-md px-1 py-[1px]'>08:10am</p>
                    </div>
                </div>
                <div className='flex border-2 border-[#5f90f9] rounded-2xl items-center justify-between my-2 px-2 py-2 mx-2.5 bg-[#142D62]'>
                    <img className='w-24 h-24 rounded-full border-[3.5px] border-[#5f90f9]' src={demo} alt="" />
                    <p className='text-center text-white text-lg'>Ciroma Chukwuma Adekunle</p>
                    <div className='flex flex-col items-center justify-center'>
                        <p className='text-white text-sm py-1'>Early</p>
                        <p className='text-center text-white text-sm bg-green-700 rounded-md px-1 py-[1px]'>08:10am</p>
                    </div>
                </div>
            </div>
                    {/* R I G H T  B O T T O M  */}
            <div className='flex items-center justify-center'>
                <button className='fixed bottom-1 z-20 border-4 border-[#979a97] h-20 w-[23rem] mx-1 rounded-3xl bg-[#417cfc] text-white text-xl'>Sign In</button>
            </div>
        </div>
      </div>

    </div>
  )
}

export default Home