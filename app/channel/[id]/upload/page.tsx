"use client"

import { useRef } from "react";
import './style.scss'
import { IParams } from '@/app/types/route'
import { uploadVideoToIPFS } from '@/app/utils/ipfs'
export default ({ params }: IParams) => {
  const id = params['id']
  const videoInput = useRef<HTMLInputElement>(null)
  const titleInput = useRef<HTMLInputElement>(null)
  const captionInput = useRef<HTMLTextAreaElement>(null)

  const uploadVideoEvent = async () => {
    const videoFiles = videoInput.current?.files ? [...videoInput.current?.files] : []
    const title = titleInput.current?.value ?? ''
    const caption = captionInput.current?.value ?? ''
    if (videoFiles.length <= 0) {
      console.log("沒傳")
      return
    }
    if (title === '') {
      console.log("沒標題")
      return
    }
    const {data, error, statusCode} = await uploadVideoToIPFS(videoFiles[0])
    if (statusCode !== 200 || !data) {
      console.log(error)
      return
    }
    const ipfsHash = data.IpfsHash
    console.log(title)
    console.log(caption)
    console.log(ipfsHash)

  }

  return (
    <div className="upload-main">
      <div className="media-data-content">
        <div className="input-content">
          <div className="input-background">
            將你要上傳的影片檔案拖曳到這裡
          </div>
          <input type="file" accept="video/*" ref={videoInput}></input>
        </div>
        <div className="info-content">
          <div className="title-input">
            <div className="input-hint">標題(必填)</div>
            <input type="text" placeholder="新增可描述影片內容的標題" ref={titleInput}></input>
          </div>
          <div className="caption-input">
            <div className="input-hint">說明</div>
            <textarea placeholder="向觀眾介紹你的影片" ref={captionInput}></textarea>
          </div>
        </div>
      </div>
      <div className="media-control-content">
        <button className="upload-btn" onClick={uploadVideoEvent}>上傳</button>
      </div>
    </div>
  )
}