export const prefix = '\x1b[';
export const colors = {
  black: '30m',
  red: '31m',
  green: '32m',
  yellow: '33m',
  blue: '34m',
  purple: '35m',
  cyan: '36m',
  white: '37m',

  blackBold: '30;1m',
  redBold: '31;1m',
  greenBold: '32;1m',
  yellowBold: '33;1m',
  blueBold: '34;1m',
  purpleBold: '35;1m',
  cyanBold: '36;1m',
  whiteBold: '37;1m',

  blackItalic: '30;3m',
  redItalic: '31;3m',
  greenItalic: '32;3m',
  yellowItalic: '33;3m',
  blueItalic: '34;3m',
  purpleItalic: '35;3m',
  cyanItalic: '36;3m',
  whiteItalic: '37;3m',

  blackUnderscore: '30;4m',
  redUnderscore: '31;4m',
  greenUnderscore: '32;4m',
  yellowUnderscore: '33;4m',
  blueUnderscore: '34;4m',
  purpleUnderscore: '35;4m',
  cyanUnderscore: '36;4m',
  whiteUnderscore: '37;4m',
};

export const resetAll = '\x1b[0m';
// \x1b[31m
// \x1b[34m
export default function compileColor(str: string) {
  return str.replace(/\<(\w+)\>(.*)\<\/\1>/gm, (originStr, color, value) => {
    // @ts-ignore
    if (colors[color]) {
      // @ts-ignore
      return `${prefix}${colors[color]}${value}${resetAll}`;
    }
    return value;
  });
}
