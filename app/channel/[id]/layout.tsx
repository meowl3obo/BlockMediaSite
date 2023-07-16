'use client'

import { useParams, usePathname } from 'next/navigation'
import Link from 'next/link';
import './style.scss'
import { links } from '@/app/config/channel'

export default function ChannelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const params = useParams()!
  const pathName = usePathname()!;
  const id = params['id']
  console.log(pathName)
  return (
    <div className='channel'>
      <div className='links-bar'>
        {
          links.map(link => { 
            return <Link href={`/channel/${id}${link.link}`} key={link.text}>
              <span className={`link-span ${pathName === `/channel/${id}${link.link}` ? 'active' : ''}`} key={link.text}>{link.text}</span>
            </Link>
          })
        }
      </div>
      {children}
    </div>
  );
}
