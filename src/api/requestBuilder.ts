import axios from "axios"
import { IRequestBuilderAttrs } from "../types"

const api = axios.create({
  baseURL: process.env.REACT_APP_HOST_BACKEND,
})

const requestBuilder = (attrs: IRequestBuilderAttrs) => {
  return api(attrs)
}

export default requestBuilder
