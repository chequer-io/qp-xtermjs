import React, { useCallback, useRef } from 'react';
import QPXterm from '../querypie-xtermjs';

const HelloWorld: React.FC = () => {
  const terminalRef = useRef<QPXterm | null>();

  const onDidMount = useCallback((terminal: QPXterm) => {
    terminalRef.current = terminal;
    terminalRef.current?.setMessage(['Hello World']);
  }, []);

  return (
    <>
      <QPXterm onDidMount={onDidMount} />
    </>
  );
};

export default HelloWorld;