
import Head from 'next/head';
import About from '../src/components/client/home/About';
import Hero from '../src/components/client/home/Hero';
import Recent from '../src/components/client/home/Recent/Recent';
import Review from '../src/components/client/home/Review/Review';
import Layout from '../src/components/client/layout';
import { getData } from '../__lib__/helpers/HttpService';
 
export default function Home({properties, reviews}) {
 
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
        <Review reviews={reviews}/>
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  const properties = await getData('/properties')
  const reviews = await getData('/reviews')
  return {
    props: {
        properties: properties || [],
        reviews: reviews || []
    }
  }
}
