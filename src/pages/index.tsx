import Head from 'next/head'
import Logo from '@/components/Logo'
import Button from '@/components/Button'
import TextField from '@/components/TextField'

export default function Home() {
  return (
    <>
      <Head>
        <title>Phantom AI</title>
        <meta name='description' content='Phantom AI Frontend Test' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Logo>Phantom</Logo>
        <Button>Generate</Button>
        <TextField placeholder='Please input prompt to generate image'/>
      </main>
    </>
  )
}
