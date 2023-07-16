import './style.scss'
import Link from "next/link";

import { getBeforeDate } from '@/app/utils/date'
import { IVideoInfo } from '@/app/types/video'

export default (props: IVideoInfo) => {
  const beforeDate = getBeforeDate(props.date)
  
  return (
    <Link href={props.link}>
      <div className="video-card">
        <div className="video"></div>
        <div className="video-info">
          <div className="video-name">{props.name}</div>
          <div className="video-author">{props.author}</div>
          <div className="video-details">
            <span>觀看次數：{props.views} 次</span>・<span>{beforeDate}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}