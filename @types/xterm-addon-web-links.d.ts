declare module 'xterm-addon-web-links' {
  export interface ILinkProviderOptions {
    /**
     * A callback to use instead of the default one.
     */
    urlRegex?: RegExp;
  }
}
