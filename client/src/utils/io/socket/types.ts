export interface SocketType {
  id: string
  connect: () => Promise<void>
  disconnect: () => void
  on: (event: string, cb: (...args: unknown[]) => void) => void
  off: (event: string, cb: (...args: unknown[]) => void) => void
  emit: (event: string, data: unknown) => void
}
