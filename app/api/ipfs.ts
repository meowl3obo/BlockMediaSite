import { fetchIPFSForm } from './index'
import { httpMethod } from '@/app/types/http'
import { IIPFSResponse } from '@/app/types/video'

export const postVideoToIPFS = async (formData: FormData) => {
  const resFile = await fetchIPFSForm<IIPFSResponse>(httpMethod.POST, "/pinning/pinFileToIPFS", { body: formData })
  return resFile
}