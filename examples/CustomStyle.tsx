import React, { useCallback, useRef } from 'react';
import { QPXterm } from '../querypie-xtermjs';

const CustomStyle: React.FC = () => {
  const terminalRef = useRef<QPXterm | null>();

  const onDidMount = useCallback((terminal: QPXterm) => {
    terminalRef.current = terminal;
    terminalRef.current?.setMessage(
      [
        '<greenBold>Hello</greenBold><blue>World</blue>',
        '<cyan>miniature bicycles</cyan> 특가를 찾고 계신가요? ' +
          '<redBold>AliExpress</redBold>에서 다양한 <blueUnderscore>miniature bicycles</blueUnderscore> 상품을 탐색하며 ' +
          '<purpleItalic>고객님</purpleItalic>께 꼭 맞는 <blackItalic>베스트 상품</blackItalic>을 만나보세요! ' +
          '<redItalic>빅 세일 기간 동안</redItalic> miniature bicycles 상품을 쇼핑하시면 고품질 브랜드뿐만 아니라 초특가 할인 혜택까지 즐기실 수 있답니다. ' +
          '가장 중요한 단계가 있어요! <yellowUnderscore>최고의 온라인 쇼핑</yellowUnderscore>을 즐기기 위해 무료 배송이나 무료 반품과 같은 보너스 혜택으로 상품을 필터링하는 것, 꼭 잊지 마세요:) miniature bicycles 관련 아이템',
      ],
      {
        useTemplate: true,
      },
    );
  }, []);

  return (
    <QPXterm
      onDidMount={onDidMount}
      style={{
        height: 200,
      }}
      options={{
        fontSize: 12,
        fontWeight: '400',
        theme: {
          foreground: '#000',
          background: '#eeeeee',
          green: '#006400',
          brightGreen: '#006400',
        },
      }}
    />
  );
};

export default CustomStyle;
