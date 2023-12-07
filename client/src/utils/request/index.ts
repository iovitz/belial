import axios, { AxiosResponse, type AxiosInstance, type AxiosRequestConfig } from 'axios'

export class Request {
  private axios: AxiosInstance
  constructor(config: AxiosRequestConfig<unknown>) {
    this.axios = axios.create(config)

    this.axios.interceptors.response.use((res: AxiosResponse) => {
      return res.data
    })
  }

  get<T>(url: string, params: Record<string, unknown> = {}, config: AxiosRequestConfig = {}) {
    return this.axios.get(url, {
      ...config,
      params,
    }) as Promise<T>
  }

  post<T>(url: string, data: Record<string, unknown> = {}, config: AxiosRequestConfig = {}) {
    return this.axios.post(
      url,
      {
        ...data,
      },
      config,
    ) as Promise<T>
  }

  put<T>(url: string, data: Record<string, unknown> = {}, config: AxiosRequestConfig = {}) {
    return this.axios.put(
      url,
      {
        ...data,
      },
      config,
    ) as Promise<T>
  }

  patch<T>(url: string, data: Record<string, unknown> = {}, config: AxiosRequestConfig = {}) {
    return this.axios.patch(
      url,
      {
        ...data,
      },
      config,
    ) as Promise<T>
  }

  postForm<T>(url: string, data: Record<string, unknown> = {}, config: AxiosRequestConfig = {}) {
    return this.axios.postForm(
      url,
      {
        ...data,
      },
      config,
    ) as Promise<T>
  }

  putForm<T>(url: string, data: Record<string, unknown> = {}, config: AxiosRequestConfig = {}) {
    return this.axios.putForm(
      url,
      {
        ...data,
      },
      config,
    ) as Promise<T>
  }

  patchForm<T>(url: string, data: Record<string, unknown> = {}, config: AxiosRequestConfig = {}) {
    return this.axios.patchForm(
      url,
      {
        ...data,
      },
      config,
    ) as Promise<T>
  }

  setHeader(key: string, value: string) {
    this.axios.defaults.headers.common[key] = value
  }

  delHeader(key: string) {
    delete this.axios.defaults.headers.common[key]
  }
}
