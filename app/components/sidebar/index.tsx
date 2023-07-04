'use client';

import './style.scss'
import Link from "next/link";
import { useRouter, usePathname } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { firstLinks, secondLinks, otherLinks } from '@/app/config/sidebar'

export default () => {
  const router = useRouter()
  const pathName = usePathname();

  const toPath = (path: string) => {
    router.push(path)
  }
  return (
    <div className='sidebar'>
      <nav>
        <ul>
          { firstLinks.map(link => {
            return <li className={pathName === link.link ? 'active' : ''} onClick={() => toPath(link.link)}>
              <FontAwesomeIcon icon={link.icon} className='fa-lg'></FontAwesomeIcon>
              <Link href={link.link}>{link.text}</Link>
            </li>
          })}
        </ul>
        <hr></hr>
        <ul>
          { secondLinks.map(link => {
              return <li className={pathName === link.link ? 'active' : ''} onClick={() => toPath(link.link)}>
                <FontAwesomeIcon icon={link.icon} className='fa-lg'></FontAwesomeIcon>
                <Link href={link.link}>{link.text}</Link>
              </li>
          })}
        </ul>
      </nav>
      <footer>
        <hr></hr>
        <div className='other-links'>
          { otherLinks.map(link => {
              return <span className='other-link'><Link href={link.link}>{link.text}</Link></span>
          })}
        </div>
        <div className='copyright'>© 2023 Meowl</div>
      </footer>
    </div>
  )
}