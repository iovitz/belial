declare module 'socket.io-client'

interface PropsWithChildren {
  children: string | JSX.Element | JSX.Element[]
}

declare module '*.module.less' {
  const classes: { readonly [key: string]: string }
  export default classes
}

interface Window {
  t(t: string): string
}
declare let t: (text: string) => string

declare global {
  interface ProcessEnv {
    DB_PORT: number
    DB_USER: string
    ENV: 'test' | 'dev' | 'prod'
  }
}
