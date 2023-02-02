import React from 'react'

export default function Nav() {
  return (
    <div className='w-full flex py-2 justify-center border-b'>
        <div className='mx-2 w-full sm:w-10/12 flex justify-between'>
            <div>
                <h1 className='text-3xl font-bold'>Maurice App</h1>
            </div>
            <div className='flex gap-5'>
                <button className='border border-black px-3 rounded'>Logout</button>
            </div>
        </div> 
    </div>
  )
}
