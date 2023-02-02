import '@/styles/globals.css'
import Main from '@/layouts/Main'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Main><Component {...pageProps} /></Main>
}
