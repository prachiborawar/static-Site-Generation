import '@/styles/globals.css'
import Home from '.'
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export default function App({ Component, pageProps }) {

  return (
    <>
      <main className='min-h-screen'>
        <NavBar />
        <Component {...pageProps} />
      </main>
      <Footer />
    </>

  )
}
