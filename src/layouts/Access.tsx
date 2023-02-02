import React from 'react'
import styles from '../styles/accessLayout.module.css'

interface AccessProps {
    children: React.ReactNode
}

export default function Access({children}: AccessProps) {
  return (
    <div className='w-full h-screen flex bg-sky-500'>
        <div className='bg-gray-100 flex w-9/12 rounded m-auto h-[90vh]'>
            <div className='w-1/2  bg-gradient-to-r from-blue-500 to-indigo-500 h-full realtive overflow-hidden hidden sm:block rounded-l' style={{position: 'relative',overflow:'hidden'}}>
                <div className={styles.cartoonImg}></div>
                <div className={styles.cloud_one}></div>
                <div className={styles.cloud_two}></div>
            </div>
            <div className='w-full sm:w-1/2'>
                {children}
            </div>
        </div>
    </div>
  )
}
