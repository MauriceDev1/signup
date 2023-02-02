import Link from 'next/link'
import React from 'react'

export default function Nav() {
  return (
    <div className='w-full py-3 flex border-b sticky top-0 bg-white'>
        <div className='w-10/12 flex m-auto justify-between items-center'>
            <div>
                <h1 className='text-3xl font-bold'>Maurice App</h1>
            </div>
            <div className='flex gap-5'>
                <Link href="/login" className='px-4 border border-gray-500 rounded py-1'>Login</Link>
                <Link href="/signup" className='px-4 border bg-blue-500 hover:bg-blue-600 text-white border-blue-700 rounded py-1'>Signup</Link>
            </div>
        </div>
    </div>
  )
}
