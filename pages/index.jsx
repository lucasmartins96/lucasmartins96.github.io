import Head from 'next/head';
import About from '../components/Index/About';
import Header from '../components/Index/Header';
import Hero from '../components/Index/Hero';
import MyProjects from '../components/Index/MyProjects';

function HomePage() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <title>Lucas Martins da Silva</title>
      </Head>
      <Header />
      <Hero />
      <About />
      <MyProjects />
    </>
  );
}

export default HomePage;
