declare module 'socket.io-client'
declare module '*.module.less' {
  const classes: { readonly [key: string]: string }
  export default classes
}

interface Window {
  t(t: string): string
}
declare let t: (text: string) => string
