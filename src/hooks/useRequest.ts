import { useState } from "react"
import requestBuilder from "../api/requestBuilder"
import { IUseRequestProps, IUseRequestReturnProps } from "../types"

export function useRequest(props: IUseRequestProps): IUseRequestReturnProps {
  const [error, setErrors] = useState<any>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const { onSuccess, method, path } = props
  const submitRequest = async <TReq = undefined>(data?: TReq): Promise<any> => {
    try {
      setLoading(true)
      const { data: resData } = await requestBuilder({
        url: path,
        method,
        body: data,
      })
      onSuccess?.()
      setLoading(false)
      return resData
    } catch (err) {
      setErrors(err)
      setLoading(false)
    }
  }
  const clearError = () => {
    if (error) setErrors(null)
  }

  return { clearError, error, loading, submitRequest }
}
