import { fetchIPFSForm } from './index'
import { httpMethod } from '@/app/types/http'

export const postVideoToIPFS = async (formData: FormData) => {
  const resFile = await fetchIPFSForm(httpMethod.POST, "/pinning/pinFileToIPFS", { body: formData })
  return resFile
}