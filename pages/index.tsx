import type { NextPage } from 'next';
import Head from 'next/head';
import { Container } from '../styles/Layouts';
import { IQPXTermProps } from '../QPXterm';
import dynamic from 'next/dynamic';
import 'xterm/css/xterm.css';
import { useRef } from 'react';
import { Terminal } from 'xterm';

const DynamicQPXterm = dynamic<IQPXTermProps>(() => import('../QPXterm'), {
  ssr: false,
});

const Home: NextPage = () => {
  const terminalRef = useRef<Terminal>();

  return (
    <div>
      <Head>
        <title>QPXterm</title>
        <meta name="description" content="Index" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <h1>TEST</h1>
        <DynamicQPXterm
          onDidMount={terminal => {
            console.log(terminal);
            terminalRef.current = terminal;
            terminal.writeln('Hello wolrd');
            terminal.writeln('Hello wolrd');
            terminal.writeln('Hello wolrd');
            terminal.writeln('Hello wolrd');
            terminal.writeln('Hello wolrd');
            terminal.writeln('Hello wolrd');
            terminal.writeln('Hello wolrd');
            terminal.writeln('Hello wolrd');
            terminal.writeln('Hello wolrd');
            terminal.writeln('Hello wolrd');
            terminal.writeln('Hello wolrd');
            terminal.writeln('Hello wolrd');
            terminal.writeln('Hello wolrd');
            terminal.writeln('Hello wolrd');
            terminal.writeln('Hello wolrd');
            terminal.writeln('Hello wolrd');
            terminal.writeln('Hello wolrd');
            terminal.writeln('Hello wolrd');
            terminal.writeln('Hello wolrd');
            terminal.writeln('Hello wolrd');
            terminal.writeln('Hello wolrd');
            terminal.writeln('Hello wolrd');
            terminal.writeln('Hello wolrd');
            terminal.writeln('Hello wolrd');
            terminal.writeln('Hello wolrd');
            terminal.writeln('Hello wolrd');
            terminal.writeln('Hello wolrd');
            terminal.writeln('Hello wolrd');
            terminal.writeln('Hello wolrd');
            terminal.writeln('Hello wolrd');
            terminal.writeln('Hello wolrd');
            terminal.writeln('Hello wolrd');
            terminal.writeln('Hello wolrd');
            terminal.writeln('Hello from \x1B[1;3;31mxterm.js\x1B[0m $ \'');
            terminal.writeln('asdfasdfashdlfahjslidfhlashdflhasldifhlisahdflasihdflaishdflhiasldfihalsdihfalsihdflashidflahsidilf asdfasdfashdlfahjslidfhlashdflhasldifhlisahdflasihdflaishdflhiasldfihalsdihfalsihdflashidflahsidilf asdfasdfashdlfahjslidfhlashdflhasldifhlisahdflasihdflaishdflhiasldfihalsdihfalsihdflashidflahsidilf');
          }}
        />
      </Container>
    </div>
  );
};

export default Home;
