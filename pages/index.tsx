import type { NextPage } from 'next'
import Head from 'next/head'
import HeroSection from '../components/home/HeroSection'


const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>UNION AESTHETIC</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection />
    </div >
  )
}

export default Home
