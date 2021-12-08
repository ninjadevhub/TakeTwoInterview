import { LazyExoticComponent } from "react"
import { Method } from "axios"

interface IHttpRequest {
  method: Method
}
export interface IRequestBuilderAttrs extends IHttpRequest {
  body?: any
  url: string
}
export interface IUseRequestProps extends IHttpRequest {
  onSuccess?: () => void
  path: string
}
export interface IUseRequestReturnProps {
  loading: boolean
  submitRequest<TReq = undefined>(data?: TReq): Promise<any>
  clearError(): void
  error: string | object | any
}

export interface IRoutesProps {
  component: LazyExoticComponent<() => JSX.Element>
  exact?: boolean
  path: string
}
export interface IChatReq {
  name: string
  message: string
}
export interface IChatRes {
  author: string
  message: string
}
