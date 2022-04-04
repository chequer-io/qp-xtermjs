import React, { useCallback, useRef } from 'react';
import QPXterm from '../QPXterm';
import { Terminal } from 'xterm';

const HelloWorld: React.FC = () => {
  const terminalRef = useRef<Terminal | null>(null);

  const initMessage = useCallback(() => {
    if (terminalRef.current) {
      terminalRef.current?.write('Hello World');
    }
  }, []);

  const onDidMount = useCallback((terminal: Terminal) => {
    terminalRef.current = terminal;
    initMessage();
  }, []);

  return (
    <>
      <QPXterm onDidMount={onDidMount} />
    </>
  );
};

export default HelloWorld;
