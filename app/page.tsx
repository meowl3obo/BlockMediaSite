// import Image from 'next/image'
import './style.scss'
import dynamic from "next/dynamic";

export const metadata = {
  title: "MeowlTube",
  description: "MeowlTube is blockchain media platform",
  icons: {
    icon: '/favicon.ico'
  }
};

export default function Home() {
  const VideoCard = dynamic(() => import("@/app/components/videoCard"));
  return (
    <div className='home'>
      <div className='video-content'>
        <VideoCard 
          link="/"
          name="超酷片片"
          author="超酷創作者"
          views="123432"
          date="2021-07-13"
        />
        <VideoCard 
          link="/"
          name="超酷片片"
          author="超酷創作者"
          views="123432"
          date="2022-01-13"
        />
        <VideoCard 
          link="/"
          name="超酷片片"
          author="超酷創作者"
          views="123432"
          date="2022-07-01"
        />
        <VideoCard 
          link="/"
          name="超酷片片"
          author="超酷創作者"
          views="123432"
          date="2022-07-13"
        />
        <VideoCard 
          link="/"
          name="超酷片片"
          author="超酷創作者"
          views="123432"
          date="2022-09-13"
        />
        <VideoCard 
          link="/"
          name="超酷片片"
          author="超酷創作者"
          views="123432"
          date="2022-12-13"
        />
        <VideoCard 
          link="/"
          name="超酷片片"
          author="超酷創作者"
          views="123432"
          date="2023-01-13"
        />
        <VideoCard 
          link="/"
          name="超酷片片"
          author="超酷創作者"
          views="123432"
          date="2023-07-01"
        />
        <VideoCard 
          link="/"
          name="超酷片片"
          author="超酷創作者"
          views="123432"
          date="2023-07-05 12:13:14"
        />
      </div>


      {/* <Image
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        /> */}
    </div>
  )
}
