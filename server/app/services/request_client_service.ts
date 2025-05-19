import got from 'got'

export class RequestClientService {
  get<T = unknown>(url: string) {
    return got.get(url).json<T>()
  }
}
