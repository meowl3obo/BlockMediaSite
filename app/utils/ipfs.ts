import { postVideoToIPFS } from '@/app/api/ipfs'

export const uploadVideoToIPFS = async (video: File) => {
  const formData = new FormData()
  formData.append('file', video)
  const resFile = await postVideoToIPFS(formData)
  return resFile
}