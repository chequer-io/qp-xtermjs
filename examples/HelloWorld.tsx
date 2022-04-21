import React, { useCallback, useRef } from 'react';
import { QPXterm } from '../querypie-xtermjs';

const HelloWorld: React.FC = () => {
  const terminalRef = useRef<QPXterm | null>();

  const onDidMount = useCallback((terminal: QPXterm) => {
    terminalRef.current = terminal;
    terminalRef.current?.setMessage(['Hello World', 'https://querypie.com']);
  }, []);

  return (
    <>
      <QPXterm onDidMount={onDidMount} style={{ height: 150 }} />
    </>
  );
};

export default HelloWorld;
