import React from 'react'
import { NavLink } from 'react-router-dom'
import isLinkActived from '../../Utils/Functions/isLinkActived'

const Header = () => {
  return (
    <header>
            <nav className='w-full text-white gap-2 h-[68px] flex items-center justify-center bg-[#030303]'>
                <NavLink to={'/'} className={isLinkActived}>
                    خانه
                </NavLink>
                <NavLink to={'/question'} className={isLinkActived}>
                    پرسش
                </NavLink>
                <NavLink to={'/create'} className={isLinkActived}>
                    ایجاد پرسش
                </NavLink>
            </nav>
    </header>
  )
}

export default Header