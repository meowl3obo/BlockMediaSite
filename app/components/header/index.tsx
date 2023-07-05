'use client';

import "./style.scss";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux'
import { controlSidebar } from '@/app/redux/component'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faVideo, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faBell, faUser } from '@fortawesome/free-regular-svg-icons'
import { useRef, KeyboardEvent } from "react";

export default () => {
  const IconButton = dynamic(() => import("@/app/components/iconButton"));
  const LogoLight = dynamic(() => import("@/app/components/logo/logo-light"));
  const LogoDark = dynamic(() => import("@/app/components/logo/logo-dark"));
  const dispatch = useDispatch()
  const router = useRouter()
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
    dispatch(controlSidebar())
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
        <div className="pc-only">
          <IconButton icon={faBars} size="fa-xl" onClick={controlSideBar}></IconButton>
        </div>
        <div className="site-icon">
          <Link href="/">
          {/* MeowlTube */}
            <LogoDark />
          </Link>
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
        <div className="pc-only">
          <IconButton icon={faVideo} size="fa-xl" onClick={toUploadVideo}></IconButton>
        </div>
        <div className="pc-only">
          <IconButton icon={faBell} size="fa-xl" onClick={checkNotify}></IconButton>
        </div>
        <div>
          <IconButton icon={faUser} size="fa-xl" onClick={controlUserController}></IconButton>
        </div>
      </div>
    </header>
  );
};
