export interface IIPFSResponse {
  IpfsHash: string
  PinSize: number
  Timestamp: string
  isDuplicate: boolean
}

export interface IVideoInfo {
  link: string,
  name: string,
  author: string,
  views: string,
  date: string
}