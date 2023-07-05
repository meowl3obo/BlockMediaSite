'use client';

import './style.scss'
import Link from "next/link";
import { useRouter, usePathname } from 'next/navigation'
import { useSelector } from 'react-redux'
import { RootState } from '@/app/redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { firstLinks, secondLinks, otherLinks } from '@/app/config/sidebar'

export default () => {
  const router = useRouter()
  const pathName = usePathname();
  const sidebarStatus = useSelector((state: RootState) => state.component.sidebarStatus)
  console.log(sidebarStatus)

  const toPath = (path: string) => {
    router.push(path)
  }
  return (
    <div className={`sidebar ${sidebarStatus ? 'open' : 'close'}`}>
      <nav>
        <ul>
          { firstLinks.map(link => {
              return <li className={pathName === link.link ? 'active' : ''} key={link.text} onClick={() => toPath(link.link)}>
                <div>
                  <FontAwesomeIcon icon={link.icon} className='fa-lg'></FontAwesomeIcon>
                </div>
                <div className='link-div'>
                  <Link href={link.link}>{link.text}</Link>
                </div>
              </li>
          })}
        </ul>
        <hr></hr>
        <ul>
          { secondLinks.map(link => {
              return <li className={pathName === link.link ? 'active' : ''} key={link.text} onClick={() => toPath(link.link)}>
                <div>
                  <FontAwesomeIcon icon={link.icon} className='fa-lg'></FontAwesomeIcon>
                </div>
                <div className='link-div'>
                  <Link href={link.link}>{link.text}</Link>
                </div>
              </li>
          })}
        </ul>
      </nav>
      <footer>
        <hr></hr>
        <div className='other-links'>
          { otherLinks.map(link => {
              return <span className='other-link' key={link.text}><Link href={link.link}>{link.text}</Link></span>
          })}
        </div>
        <div className='copyright'>© 2023 Meowl</div>
      </footer>
    </div>
  )
}