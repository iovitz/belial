const scopeGloabl: any = globalThis

scopeGloabl.__isProd = false

declare global {
  const __isProd: boolean
}
