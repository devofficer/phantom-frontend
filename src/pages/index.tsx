import Head from 'next/head'
import { Inter } from 'next/font/google'
import Logo from '@/components/Logo'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Phantom AI</title>
        <meta name="description" content="Phantom AI Frontend Test" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Logo>Phantom</Logo>
      </main>
    </>
  )
}
