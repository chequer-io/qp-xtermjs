import React, { useCallback, useRef } from 'react';
import { QPXterm, LinkProvider } from '../querypie-xtermjs';
import { WebLinksAddon } from 'xterm-addon-web-links';

const HelloWorld: React.FC = () => {
  const terminalRef = useRef<QPXterm | null>();
  const webLinkAddonRef = useRef<WebLinksAddon>(new WebLinksAddon());
  const onDidMount = useCallback((terminal: QPXterm) => {
    terminalRef.current = terminal;
    terminalRef.current?.setMessage(
      [
        '<green>sql:</green> "select * from actor;" <yellowUnderscore>#SQL_REQUEST</yellowUnderscore> xxxxx',
        '<blue>002.222.22.22 executed</blue>',
        '<green>sql:</green> "insert info table values(a, v, c);" ' +
          '<yellowUnderscore>#SQL_REQUEST</yellowUnderscore> xxxxx',
        '<blue>002.222.22.22 executed</blue>',
      ],
      {
        useTemplate: true,
      },
    );

    terminal.terminal.registerLinkProvider(
      new LinkProvider(
        terminal.terminal,
        /sql: ".+" (#SQL_REQUEST)/g,
        (event, text, match) => {
          const sqlMatch = /sql: "(.+)"/.exec(match[0]);
          console.log(sqlMatch?.[1]);
        },
      ),
    );
  }, []);

  return (
    <>
      <QPXterm
        addons={[webLinkAddonRef.current]}
        onDidMount={onDidMount}
        style={{ height: 200 }}
      />
    </>
  );
};

export default HelloWorld;
