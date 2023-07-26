import { useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { customFetch } from '@/utils'

import Head from 'next/head'
import Logo from '@/components/Logo'
import Button from '@/components/Button'
import TextField from '@/components/TextField'
import StyledImage from '@/components/StyledImage'

import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const promptRef = useRef<HTMLInputElement>(null);
  const [imgUrl, setImgUrl] = useState<string>('/logo.png');
  const [loading, setLoading] = useState<boolean>(false);

  const handleGenerate = async () => {
    if(!promptRef.current) return;

    const prompt = promptRef.current.value;
    const response = await customFetch({
      url: '/api/generate',
      params: {prompt: prompt}
    });

    if(response.success) {
      setImgUrl(response.data.imgUrl);
    } else {
      toast.error("Hmm, something went wrong!");
    }
  }

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
        <StyledImage alt="Generated Image" src={imgUrl} width={640} height={640} />
        <TextField ref={promptRef} placeholder='Please input prompt to generate image'/>
        <Button onClick={handleGenerate}>Generate</Button>
      </main>
      <ToastContainer />
    </>
  )
}
