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
      <div>
        <div> user id : {id} / bar links</div>
        {
          links.map(link => { 
            return <span className='link-span' key={link.text}>
              <Link href={`/channel/${id}${link.link}`}>{link.text}</Link>
            </span>
          })
        }
      </div>
      {children}
    </div>
  );
}
