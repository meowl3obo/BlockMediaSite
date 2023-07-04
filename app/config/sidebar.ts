import { faHouse, faNotesMedical, faClockRotateLeft, faGear } from '@fortawesome/free-solid-svg-icons'
import type { IIconLink, ILink } from '@/app/types/link'

export const firstLinks: Array<IIconLink> = [
  { text: "首頁", link: "/", icon: faHouse },
  { text: "訂閱內容", link: "/subscriptions", icon: faNotesMedical },
  { text: "觀看紀錄", link: "/history", icon: faClockRotateLeft }
]

export const secondLinks: Array<IIconLink> = [
  { text: "設定", link: "/setting", icon: faGear },
]

export const otherLinks: Array<ILink> = [
  { text: "簡介", link: "/Introduction" },
  { text: "創作者", link: "/creator" },
  { text: "廣告", link: "/advertise" },
  { text: "贊助", link: "/donate" },
  { text: "運作模式", link: "/operation" },
]