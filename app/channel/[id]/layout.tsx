'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link';
import './style.scss'
import { links } from '@/app/config/channel'

export default function ChannelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const params = useParams()
  const id = params['id']
  return (
    <div>
      <div className='links-bar'>
        {
          links.map(link => { 
            return <Link href={`/channel/${id}${link.link}`} key={link.text}>
              <span className='link-span' key={link.text}>{link.text}</span>
            </Link>
          })
        }
      </div>
      {children}
    </div>
  );
}
