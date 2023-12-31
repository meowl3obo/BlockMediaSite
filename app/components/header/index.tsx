'use client';

import "./style.scss";
import { useRef, KeyboardEvent } from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/app/redux'
import { controlSidebar } from '@/app/redux/component'
import { setAddress } from '@/app/redux/user'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faVideo, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faBell, faUser } from '@fortawesome/free-regular-svg-icons'
import { connectMetamask } from '@/app/utils/metamask';
import IconButton from "@/app/components/iconButton"
import LogoLight from "@/app/components/logo/logo-light"
import LogoDark from "@/app/components/logo/logo-dark"

export default () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const userAddress = useSelector((state: RootState) => state.user.address)
  const searchInput = useRef<HTMLInputElement>(null)

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter') return
    search()
  }
  const search = () => {
    if (searchInput.current?.value.trim() === '') return
    const searchQuery = searchInput.current?.value
    router.push(`/result?search=${searchQuery}`)
  }
  const controlSideBar = () => {
    dispatch(controlSidebar())
  }
  const toUploadVideo = async () => {
    toChannelPath('/upload')
  }
  const checkNotify = () => {
    console.log('checkNotify')
  }
  const controlUserController = async () => {
    toChannelPath('')
  }
  const toChannelPath = async (url: string) => {
    if (userAddress === '') {
      const response = await connectMetamask()
      if (!response.isSuccess) console.log(response.message)
      else {
        dispatch(setAddress(response.address))
        router.push(`/channel/${response.address}${url}`)
      }
    } else router.push(`/channel/${userAddress}${url}`)
  }
  return (
    <header className="header">
      <div className="start">
        <div className="pc-only">
          <IconButton icon={faBars} size="fa-xl" onClick={controlSideBar}></IconButton>
        </div>
        <div className="site-icon">
          <Link href="/">
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
