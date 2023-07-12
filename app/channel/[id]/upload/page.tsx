"use client"

import { useRef } from "react";
import { IParams } from '@/app/types/route'
import { uploadVideoToIPFS } from '@/app/utils/ipfs'
export default ({ params }: IParams) => {
  const id = params['id']
  const videoInput = useRef<HTMLInputElement>(null)

  const uploadVideoEvent = () => {
    const videoFiles = videoInput.current?.files ? [...videoInput.current?.files] : []
    if (videoFiles.length <= 0) {
      console.log("沒傳")
      return
    }
    uploadVideoToIPFS(videoFiles[0])
  }

  return (
    <div>
      <div>content</div>
      <div>
        <input type="file" accept="video/*" ref={videoInput}></input>
        <button onClick={uploadVideoEvent}>上傳</button>
      </div>
    </div>
  )
}