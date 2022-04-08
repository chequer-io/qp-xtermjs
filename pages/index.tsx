import type { NextPage } from 'next';
import Head from 'next/head';
import { Container } from '../styles/Layouts';
import dynamic from 'next/dynamic';
import 'xterm/css/xterm.css';

const DynamicHelloWorld = dynamic(() => import('../examples/HelloWorld'), {
  ssr: false,
});

const DynamicCustomStyle = dynamic(() => import('../examples/CustomStyle'), {
  ssr: false,
});

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>QPXterm</title>
        <meta name="description" content="Index" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <h1>Hello World</h1>
        <DynamicHelloWorld />

        <h1>Custom Style</h1>
        <DynamicCustomStyle />
      </Container>
    </div>
  );
};

export default Home;
