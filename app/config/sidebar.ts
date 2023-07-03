import { faHouse, faNotesMedical, faClockRotateLeft, faGear } from '@fortawesome/free-solid-svg-icons'
import type { ILink } from '@/app/types/link'

export const firstLinks: Array<ILink> = [
  { text: "首頁", link: "/", icon: faHouse },
  { text: "訂閱內容", link: "/subscriptions", icon: faNotesMedical },
  { text: "觀看紀錄", link: "/history", icon: faClockRotateLeft }
]

export const secondLinks: Array<ILink> = [
  { text: "設定", link: "/setting", icon: faGear },
]