import { useRouter } from 'next/router';
import React, { Children } from 'react'
import Access from './Access';
import Nav from '@/components/Nav';
import FooterMain from '@/components/FooterMain';

interface MainProps {
    children: React.ReactNode
}

export default function Main({children}: MainProps) {
  const router = useRouter();

  if(router.asPath === "/signup" || router.asPath === "/login"){
    return <Access>{children}</Access>
  }

  return (
    <>
        <Nav />
        {children}
        <FooterMain />
    </>
  )
}
