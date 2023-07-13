import axios from 'axios'
import { httpMethod, IPayload } from '@/app/types/http'
import { pinataBaseUrl, pinataApiKey, pinataSecretApiKey } from '@/app/config/http'

const ipfs = axios.create({
  baseURL: pinataBaseUrl,
  timeout: 30 * 1000,
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    'charset': 'utf-8',
  }
})

const ipfsForm = axios.create({
  baseURL: pinataBaseUrl,
  timeout: 30 * 1000,
  headers: {
    'pinata_api_key': pinataApiKey,
    'pinata_secret_api_key': pinataSecretApiKey,
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