import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import { useRouter } from 'next/router';
import React, { Children } from 'react'

interface MainProps {
    children: React.ReactNode
}

export default function Main({children}: MainProps) {
  const router = useRouter();

  if(router.asPath === "/signup"){
    return <>{children}</>
  }

  return (
    <>
        <Nav />
        {children}
        <Footer />
    </>
  )
}
