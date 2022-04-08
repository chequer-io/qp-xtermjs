import React, { useCallback, useRef } from 'react';
import QPXterm from '../querypie-xtermjs';

const CustomStyle: React.FC = () => {
  const terminalRef = useRef<QPXterm | null>();

  const onDidMount = useCallback((terminal: QPXterm) => {
    terminalRef.current = terminal;
    terminalRef.current?.setMessage(['Hello World', 'TEST', 'test']);
  }, []);

  return (
    <QPXterm
      onDidMount={onDidMount}
      options={{
        fontSize: 12,
        fontWeight: '400',
        theme: {
          foreground: '#000',
          background: '#eeeeee',
        },
      }}
    />
  );
};

export default CustomStyle;
