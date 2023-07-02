'use client';

import "./style.scss";
import dynamic from "next/dynamic";
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faVideo, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faBell, faUser } from '@fortawesome/free-regular-svg-icons'
import { useRef, KeyboardEvent } from "react";
import Link from "next/link";

export default () => {
  const router = useRouter()
  const IconButton = dynamic(() => import("@/app/components/iconButton"));
  const searchInput = useRef<HTMLInputElement>(null)

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter') return
    search()
  }
  const search = () => {
    if (searchInput.current?.value.trim() === '') return
    const searchQuery = searchInput.current?.value
    router.push(`result?search=${searchQuery}`)
  }
  const controlSideBar = () => {
    console.log('controlSideBar')
  }
  const toUploadVideo = () => {
    console.log('toUploadVideo')
  }
  const checkNotify = () => {
    console.log('checkNotify')
  }
  const controlUserController = () => {
    console.log('controlUserController')
  }
  return (
    <header className="header">
      <div className="start">
        <div>
          <IconButton icon={faBars} size="fa-xl" onClick={controlSideBar}></IconButton>
        </div>
        <div className="site-icon">
          <Link href="/">MeowlTube</Link>
        </div>
      </div>
      <div className="center">
        <div className="search">
          <input type="text" placeholder="搜尋" ref={searchInput} onKeyDown={handleKeyDown}></input>
          <button onClick={search}>
            <FontAwesomeIcon icon={faMagnifyingGlass} className="fa-xl"></FontAwesomeIcon>
          </button>
        </div>
      </div>
      <div className="end">
        <div>
          <IconButton icon={faVideo} size="fa-xl" onClick={toUploadVideo}></IconButton>
        </div>
        <div>
          <IconButton icon={faBell} size="fa-xl" onClick={checkNotify}></IconButton>
        </div>
        <div>
          <IconButton icon={faUser} size="fa-xl" onClick={controlUserController}></IconButton>
        </div>
      </div>
    </header>
  );
};
