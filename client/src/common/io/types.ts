import { CreateAxiosDefaults } from 'axios'

export interface IOConfig extends CreateAxiosDefaults {
  socketConfig: {
    socketUrl: string
    socketPath: string
    socketAuth: string
  }
}
