import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import { useRouter } from 'next/router';
import React, { Children } from 'react'
import Access from './Access';

interface MainProps {
    children: React.ReactNode
}

export default function Main({children}: MainProps) {
  const router = useRouter();

  if(router.asPath === "/signup"){
    return <Access>{children}</Access>
  }

  return (
    <>
        <Nav />
        {children}
        <Footer />
    </>
  )
}
