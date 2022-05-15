
import Head from 'next/head';
import { useEffect } from 'react';
import About from '../src/components/client/home/About';
import Hero from '../src/components/client/home/Hero';
import Recent from '../src/components/client/home/Recent/Recent';
import Review from '../src/components/client/home/Review';
import Layout from '../src/components/client/layout';
import { userAuthStatus } from '../__lib__/helpers/Cookiehandler';
import { getData } from '../__lib__/helpers/HttpService';
 
export default function Home({properties}) {
 
  return (
    <>
      <Head>
        <title>Scounted</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Hero />
        <Recent properties={properties}/>
        <About />
        <Review />
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  const properties = await getData('/properties')

  return {
    props: {
        properties
    }
  }
}
