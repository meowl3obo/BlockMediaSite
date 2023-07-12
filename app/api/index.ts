import axios from 'axios'
import { httpMethod, IPayload } from '@/app/types/http'

const ipfs = axios.create({
  baseURL: "https://api.pinata.cloud",
  timeout: 30 * 1000,
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    'charset': 'utf-8',
  }
})

const ipfsForm = axios.create({
  baseURL: "https://api.pinata.cloud",
  timeout: 30 * 1000,
  headers: {
    'pinata_api_key': `a521d4dea7894a3011b4`,
    'pinata_secret_api_key': `9acff15fcc85f295c45caa859ff149630d0af4e7a41e63a7b53dbcb3d98e51cb`,
    "Content-Type": "multipart/form-data"
  }
})

export async function fetchIPFS<T>(method: httpMethod, url: string, payload: IPayload): Promise<{ data: T | null; error: any | null; statusCode: number }> {
  try {
    const response = await ipfs({
      method,
      url,
      data: payload.body ?? null,
      params: payload.params ?? null
    })
    return { data: response.data, error: null, statusCode: 200 }
  } catch (err: any) {
    return { data: null, error: err, statusCode: err.response?.status ?? 500 }
  }
}

export async function fetchIPFSForm<T>(method: httpMethod, url: string, payload: IPayload): Promise<{ data: T | null; error: any | null; statusCode: number }> {
  try {
    const response = await ipfsForm({
      method,
      url,
      data: payload.body ?? null,
      params: payload.params ?? null
    })
    return { data: response.data, error: null, statusCode: 200 }
  } catch (err: any) {
    return { data: null, error: err, statusCode: err.response?.status ?? 500 }
  }
}