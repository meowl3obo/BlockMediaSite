import './style.scss'
import dynamic from "next/dynamic";
import { IVideoInfo } from '@/app/types/video'

export const metadata = {
  title: "MeowlTube",
  description: "MeowlTube is blockchain media platform",
  icons: {
    icon: '/favicon.ico'
  }
};

export default function Home() {
  const VideoCard = dynamic(() => import("@/app/components/videoCard"));
  const videos: Array<IVideoInfo> = [
    { link: "/", name: "超酷片片", author: "超酷創作者", views: "123432", date: "2021-07-13" },
    { link: "/", name: "超酷片片", author: "超酷創作者", views: "123432", date: "2022-01-13" },
    { link: "/", name: "超酷片片", author: "超酷創作者", views: "123432", date: "2022-07-01" },
    { link: "/", name: "超酷片片", author: "超酷創作者", views: "123432", date: "2022-07-13" },
    { link: "/", name: "超酷片片", author: "超酷創作者", views: "123432", date: "2022-09-13" },
    { link: "/", name: "超酷片片", author: "超酷創作者", views: "123432", date: "2022-12-13" },
    { link: "/", name: "超酷片片", author: "超酷創作者", views: "123432", date: "2023-01-13" },
    { link: "/", name: "超酷片片", author: "超酷創作者", views: "123432", date: "2023-07-01" },
    { link: "/", name: "超酷片片", author: "超酷創作者", views: "123432", date: "2023-07-05 12:13:14" },
    { link: "/", name: "超酷片片", author: "超酷創作者", views: "123432", date: "2021-07-13" },
    { link: "/", name: "超酷片片", author: "超酷創作者", views: "123432", date: "2021-07-13" },
    { link: "/", name: "超酷片片", author: "超酷創作者", views: "123432", date: "2021-07-13" },
    { link: "/", name: "超酷片片", author: "超酷創作者", views: "123432", date: "2021-07-13" },
    { link: "/", name: "超酷片片", author: "超酷創作者", views: "123432", date: "2021-07-13" },
  ]
  return (
    <div className='home'>
      <div className='video-content'>
        {
          videos.map((item) => 
            <VideoCard 
              link={item.link}
              name={item.name}
              author={item.author}
              views={item.views}
              date={item.date}
            />
          )
        }
      </div>
    </div>
  )
}
