import React from 'react'

function Post() {
  return (
    <div className='flex flex-col'>
        <div className='bg-white mt-6 rounded-md p-4'>
            <div className='flex items-center space-x-2'>
                <img src="/Facebook_Logo.png" alt=""  className='rounded-full w-10 h-10'/>
                <div>
                    <p className='font-medium'>Khanh</p>
                    <p className='text-sm text-gray-500'>{new Date().toLocaleString()}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post