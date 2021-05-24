import Head from 'next/head';
import Header from '../components/Index/Header';

function HomePage() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>Lucas Martins da Silva</title>
      </Head>
      <Header />
    </>
  );
}

export default HomePage;