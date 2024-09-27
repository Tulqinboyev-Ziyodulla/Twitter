import React, { useContext } from 'react'
import Logo from "../assets/images/logo.svg"
import { Link, NavLink } from 'react-router-dom'
import { BookmarksIcon, Dots, ExploreIcon, HomeIcon, ListsIcon, MassagesIcon, MoreICon, NotificationsIcon, ProfileFillIcon } from '../assets/images/Icons'
import Button from './Button'
import LogOutModal from './Modal'
import { Context } from '../context/Index'

function Navbar() {
  const navbarList = [
    { id: 1, icon: <HomeIcon />, title: "Home", path: "/" },
    { id: 2, icon: <ExploreIcon />, title: "Explore", path: "/explore" },
    { id: 3, icon: <NotificationsIcon />, title: "Notifications", path: "/notifications" },
    { id: 4, icon: <MassagesIcon />, title: "Messages", path: "/messages" },
    { id: 5, icon: <BookmarksIcon />, title: "Bookmarks", path: "/bookmarks" },
    { id: 6, icon: <ListsIcon />, title: "Lists", path: "/lists" },
    { id: 7, icon: <ProfileFillIcon />, title: "Profile", path: "/profile" },
    { id: 8, icon: <MoreICon />, title: "More", path: "/more" },
  ]

  const user = JSON.parse(localStorage.getItem("token"))
  const { isOpenModal, setIsOpenModal } = useContext(Context)

  function handleLogOut() {
    localStorage.clear()
    window.location.reload()
  }

  return (
    <div className='w-1/4 relative h-screen overflow-y-auto pt-8 pl-24 pr-4'>
      <Link to={"/"}>
        <img src={Logo} alt="site logo img" width={40} height={33} />
      </Link>
      <div className="mt-12 space-y-8">
        {navbarList.map(item => (
          <NavLink className={"flex font-semibold text-lg leading-6 items-center space-x-5"} key={item.id} to={item.path}>
            {item.icon}
            <span>{item.title}</span>
          </NavLink>
        ))}
      </div>
      <Button type="button" extraStyle="py-4 mt-8">Tweet</Button>
      <div className="flex gap-2.5 absolute bottom-8">
        <img className='rounded-full' src="https://picsum.photos/500/500" alt="icon" width={50} height={50} />
        <div className="flex items-center gap-10">
          <div>
            <strong className='font-semibold block text-base'>{user.login}</strong>
            <span className='text-base opacity-60'>@Random_Email</span>
          </div>
          <button onClick={() => setIsOpenModal(true)} className='hover:scale-110 duration-300'>
            <Dots className="w-4 h-1" />
          </button>
        </div>
      </div>
      {isOpenModal && (
        <LogOutModal>
          <p className='font-semibold text-4xl text-center'>Confirm log out?</p>
          <div className="flex items-center justify-around mt-5">
            <button onClick={() => setIsOpenModal(false)} className='w-1/3 py-2 rounded-full bg-[#1DA1F2] font-bold text-2xl text-white hover:bg-transparent hover:border-[#1DA1F2] hover:text-[#1DA1F2] border-2 border-transparent duration-300'>Cancel</button>
            <button onClick={handleLogOut} className='w-1/3 py-2 rounded-full bg-red-500 font-bold text-2xl text-white hover:bg-transparent hover:border-red-500 hover:text-red-500 border-2 border-transparent duration-300'>Yes</button>
          </div>
        </LogOutModal>
      )}
    </div>
  )
}

export default Navbar
